import React, { useContext, useState } from 'react'
import LayOut from '../../LayOut/LayOut'
import { DataContext } from '../../DataProvider/DataProvider';
import classes from './payment.module.css'
import ProductCard from "../../Product/ProductCard"
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';


function Payment() {

  const [{ user, basket }] = useContext(DataContext);

  const [cardError, setCardError] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

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
              <form action="">
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
                  <button>
                    Pay Now
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