import React, { useEffect, useState } from 'react'
import LayOut from '../../LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../Api/endPoints'
import ProductCard from '../../Product/ProductCard'
import classes from './Results.module.css'
import Loader from '../../Loader/Loader'

function Results() {
  const [results, setResults] = useState([])
  const { categoryName } = useParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data)
        setIsLoading(false)
      }).catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }, []);


  return (

    <LayOut>
      {isLoading ? (<Loader />) : 
      
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category / {categoryName}</p>
        <hr />
        <div className={classes.products_container} >
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
      }
    </LayOut>
  )
}

export default Results