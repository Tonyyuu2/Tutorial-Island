import React from 'react'
import './Product.css'
import book from '../icons/book.png'

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The Lean Startup</p>
        <p className='product__price'>
          <small>$</small>
          <strong>29.99</strong>
        </p>
        <div className='product__rating'>
          <p>⭐️</p>
        </div>
      </div>
      <img src={book} alt="book" />

      <button>Add to Basket</button>
    </div>
  )
}

export default Product