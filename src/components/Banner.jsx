import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const Banner = () => {
  return (
    <>
      <section className="banner">
        <Fade arrows={false} autoplay={true} duration={2000} infinite={true}>
          <div>
            <img src={"/assets/banner.webp"} alt="slide1" width={1893} height={851}/>
          </div>
          <div>
            <img src={"/assets/banner1.webp"} alt="slide2" width={1893} height={851}/>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Banner;
