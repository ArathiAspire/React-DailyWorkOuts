import React, { Suspense } from 'react'
// import ProductItem from './ProductItems'

const ProductItem=React.lazy(()=>import("./ProductItems"))

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductItem name="Laptop"/>
      </Suspense>
    </div>
  )
}

export default Products
