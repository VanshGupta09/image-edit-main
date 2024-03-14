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
                  <SliderPopup imgData={{ subImagesArray: data?.subImagesArray,subImagesTitle:data?.subImagesTitle}} screen={{ sc_1: 3, sc_2: 3, sc_3: 3, sc_4: 3 }} />
                </div>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Service1;
