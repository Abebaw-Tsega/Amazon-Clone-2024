import React from 'react'
import CarouselEffect from '../../carousel/CarouselEffect';
import Category from '../../Category/Category';
import Product from '../../Product/Product';
import LayOut from '../../LayOut/LayOut';

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  )
}

export default Landing;