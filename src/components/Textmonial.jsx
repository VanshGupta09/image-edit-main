import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item from './Item';

export const Textmonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="crowsel">
        <div className="container">
          <p><span>Why choose us</span></p>
          <h3>What is Everyone Saying?</h3>
          <p className='subheading'>Our work speaks volumes! It reflects our commitment to excellence. Read what our happy clients have to say about their heartfelt experiences.</p>
          <Carousel showDots={true} infinite={true} autoPlay={false} autoPlaySpeed={1000} arrows={false} responsive={responsive} >
            <Item />
            <Item />
            <Item />
            <Item />
          </Carousel>
        </div>
      </div>
    </>
  )
}
