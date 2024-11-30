import React,{useContext} from 'react'
import LayOut from '../../LayOut/LayOut'
import { DataContext } from '../../DataProvider/DataProvider';
import ProductCard from '../../Product/ProductCard';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './cart.module.css'

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
      return item.price * item.amount + amount
  }, 0)
  console.log(basket)

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length == 0 ? (<p>opps ! No item in your cart</p>) : (
              basket?.map((item, index) => {
                return <ProductCard
                  key={index}
                  renderDesc={true}
                  product={item}
                  renderAdd={false}
                  flex={true}
                />
              })
            )
          }
          
          {
            basket?.length !== 0 && (
              <div className={classes.subtotal}>
                <div>
                <p>Subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount= {total} />
                </div>
                <span>
                  <input type="checkbox" />
                  <small>This order contains a gift</small>
                  <Link to="./payment">Continue to checkout</Link>
                </span>
              </div>
            )
          }
          
        </div>
      </section>
    </LayOut>
  )
}

export default Cart