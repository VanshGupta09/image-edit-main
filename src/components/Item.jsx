import React from 'react'

const Item = () => {
  return (
    <div className='item'>
      <h4>Sarah and Michael</h4>
      <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
      <p>The photographs taken by Wedshot tell the story of our wedding day perfectly. They managed to capture the essence of every moment, and looking back at the images brings us back to that magical day. We are forever grateful.</p>
      <span className='quote'><i className="fa-sharp fa-solid fa-quote-right"></i></span>
    </div>
  )
}

export default Item;
