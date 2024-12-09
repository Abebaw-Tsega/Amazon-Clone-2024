import React, { useContext, useState } from 'react'
import LayOut from '../../LayOut/LayOut'
import { DataContext } from '../../DataProvider/DataProvider';
import classes from './payment.module.css'
import ProductCard from "../../Product/ProductCard"
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../../Api/axios';
import { ClipLoader } from 'react-spinners';
import { db } from '../../Utility/firebase';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../Utility/action.type';

function Payment() {

  const [{ user, basket }, dispatch] = useContext(DataContext);

  const [cardError, setCardError] = useState(null)
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const totalItem = basket?.reduce((amount, item, index) => {
    return item.amount + amount
    key: index;
  }, 0)

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount
  }, 0)

  const handleChange = (e) => {
    console.log(e?.error?.message);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError('');
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);
      const response = await axiosInstance({
        method: "post",
        url: `/payment/create?total=${total * 100}`,
      })
      console.log(response.data);

      const clientSecret = response.data?.clientSecret;
      const { paymentIntent } = await stripe.confirmCardPayment
        (clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)
          }
        });

      // console.log(paymentIntent);

      await db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        })

      dispatch({
        type: Type.EMPTY_BASKET
      })

      setProcessing(false);
      navigate("/orders", { state: { msg: "Order Placed Successfully" } })
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }

  };


  return (
    <LayOut>
      <div className={classes.Payment_header} >
        <h4>CheckOut ({totalItem}) Items</h4>
      </div>

      <section className={classes.Payment}>
        <div className={classes.flex}>
          <h3>Delivery Address </h3>
          <div>
            <div>{user?.email} </div>
            <div>2221 West Street </div>
            <div> San Francisco, CA 94107</div>
          </div>
        </div>
        <hr />

        <div className={classes.flex} >
          <h3>Review items and Delivery </h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />


        <div className={classes.flex} >
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container} >
            <div className={classes.payment_detail} >
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />

                <div className={classes.payment_price} >
                  <div>
                    <span>
                      Total Order | <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type='submit'>
                    {
                      processing ? (
                        <div className={classes.loading} >
                          <ClipLoader color='gray' size={12} />
                          <p>Please wait ...</p>
                        </div>
                      ) : "Pay Now"
                    }


                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  )
}

export default Payment