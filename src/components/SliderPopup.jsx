import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import AfterBefore from "./AfterBefore";

const SliderPopup = ({ screen, head_white, dataImg_  }) => {
  const [data, setData] = useState(0);
  const [activePop, setActivePop] = useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: screen.sc_1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: screen.sc_2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: screen.sc_3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: screen.sc_4,
    },
  };

  

  const next = () => {
    if (dataImg.length - 1 > data) {
      setData(data + 1);
      console.log(dataImg.length, data);
    } else {
      // console.log("stop");
      return;
    }
  };
  const prev = () => {
    if (data > 0) {
      setData(data - 1);
      console.log(dataImg.length, data);
    } else {
      // console.log("stop");
      return;
    }
  };

  


  const dataImg = [
    {
      aftimg: "/assets/cca1.jpg",
      befimg: "/assets/ccb1.jpg",
    },
    {
      aftimg: "/assets/cca2.jpg",
      befimg: "/assets/ccb2.jpg",
    },
    {
      aftimg: "/assets/cca3.jpg",
      befimg: "/assets/ccb3.jpg",
    },
    {
      aftimg: "/assets/cca4.jpg",
      befimg: "/assets/ccb4.jpg",
    },
  ];
  return (
    <>
      <div className="sliderPopup">
        <h5 className={`${head_white ? "white" : ""}`}>OUR SAMPLE</h5>
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          arrows={false}
          responsive={responsive}
        >
          {dataImg?.map((ele, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setData(i);
                  setActivePop(!activePop);
                }}
                className="slideCard"
              >
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={ele?.aftimg}
                  width={1000}
                  height={1000}
                  alt="Image Edite"
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className={`popup ${activePop ? "active" : ""}`}>
        <div className="main">
          <div className="left" onClick={prev}>
            <AiOutlineLeft />
          </div>
          <div className="right" onClick={next}>
            <AiOutlineRight />
          </div>
          <span className="close" onClick={() => setActivePop(!activePop)}>
            <AiOutlineCloseCircle />
          </span>
          <AfterBefore after={dataImg[data]?.aftimg} before={dataImg[data]?.befimg} />
        </div>
      </div>
    </>
  );
};

export default SliderPopup;
