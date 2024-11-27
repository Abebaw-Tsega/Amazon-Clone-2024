import Rating from "@mui/material/Rating"
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css"
import { Link } from "react-router-dom";

const ProductCard = ({ product, flex, renderDesc }) => {
  const { image, title, id, rating, price, description } = product;
  // console.log(product);
  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`} >

      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>

      <div>
        {/* <h3>{title?.length > 30 ? title.slice(0, 30) + "..." : title}</h3> */}
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth: "750px"}}>{description}</div>}

        <div className={classes.rating} >
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button} >
          add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard;