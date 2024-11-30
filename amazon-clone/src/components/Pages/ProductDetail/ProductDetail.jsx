import React, { useEffect, useState } from 'react'
import LayOut from '../../LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../Api/endPoints'
import ProductCard from "../../Product/ProductCard"
import Loader from '../../Loader/Loader'

function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data)
        setIsLoading(false)
      }).catch((err) => {
        console.log(err)
        setIsLoading(false)

      })
  }, [])

  return (
    <LayOut>

      {isLoading ? (<Loader />) : (<ProductCard
        product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}

      />)
      }

    </LayOut>
  )
}

export default ProductDetail