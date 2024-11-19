import { useEffect, useState } from "react";
import axios from "axios"
import ProductCard from "./ProductCard";
import classes from "./product.module.css"

function Product() {
  const [products, setProducts] = useState()

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res)
        
        setProducts(res.data)
      }).catch((err) => {
        console.log(err)
      })

  }, [])
  // console.log(products)
  return (
    <section className={classes.products_container} > 
      {
        products?.map((singleProduct) => {
          return <ProductCard product={singleProduct} key={singleProduct.id} />
        })
      }
    </section>
  )
}

export default Product;