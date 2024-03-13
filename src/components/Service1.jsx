import React from "react";
import Link from "next/link";
import SliderPopup from "./SliderPopup";

const Service1 = ({ data }) => {
  return (
    <>
      <section className="service1">
        <div className="container">
          <div className="flex gap">
            <div className="col50" style={{ order: data.imageDir ? 1 : 2 }}>
              <p>
                <span>{data.subTitle}</span>
              </p>
              <h3>{data.title}</h3>
              {
                data.paraArray?.map((elm, ind) => {
                  return <p key={ind}>{elm}</p>
                })
              }
              {/* <p className="ped20">
              Experience the artistry of noir edits at Refine Pixel. Our editors design alluring black-and-white images that display a timeless elegance. Our best noir edits consist of dramatic, moody and cinematic masterpieces.
              </p>
              <p className="paraSpace">
              Let our specialist editors take your images to a bygone era. See how they use highlights and shadows to tell captivating visual stories. Come embrace the beauty and fascination of noir edits only at Refine Pixel.
              </p> */}
              {/* fghjkl */}
              {data.button ? (
                <Link className="btn" href="/">
                  {data.btnText}
                </Link>
              ) : (
                ""
              )}
            </div>
            {
              data.imgPath
                ? <div
                  className="col50 imageTab"
                style={{ order: data.imageDir ? 2 : 1 }}
                >
                  <img src={data.imgPath} alt="Section Image" />
                </div>
                : <div
                  className="col50 imageTab"
                  style={{ order: data.imageDir ? 2 : 1 }}
                >
                  <img src={"/assets/before.jpg"} width={500} height={500} alt="Image Edite" />
                  <SliderPopup screen={{ sc_1: 3, sc_2: 3, sc_3: 3, sc_4: 3 }} />
                </div>
            }
            {/* if(imgSec){
              <div
                className="col50 imageTab"
              // style={{ order: data.imageDir ? 2 : 1 }}
              >
                <img src={"/assets/SectionImg.png"} alt="Image Edite" />
              </div>
            }else{
              <div
                className="col50 imageTab"
                style={{ order: data.imageDir ? 2 : 1 }}
              >
                <img src={"/assets/before.jpg"} width={500} height={500} alt="Image Edite" />
                <SliderPopup screen={{ sc_1: 3, sc_2: 3, sc_3: 3, sc_4: 3 }} />
              </div>
            } */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
