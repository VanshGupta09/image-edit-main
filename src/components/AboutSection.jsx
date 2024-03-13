import React from 'react';

import Link from 'next/link';

const AboutSection = ({ data }) => {



  return (
    <>
      <section className='about'>
        <div className='container'>
          <div className='flex gap'>
            <div className="col50">
              <p><span>{data.subTitle}</span></p>
              <h3>{data.title}</h3>
              <p className='ped20'>{data.description}</p>
              <Link className='btn' href={data.btnLink}>{data.btnName}</Link>
            </div>
            <div className="col50">
              <img src={data.image} alt='About us' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection;