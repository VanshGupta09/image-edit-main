import React from "react";
import SliderPopup from "./SliderPopup";

const Thirdservisec = ({ data }) => {
  return (
    <section className="Thirdservice">
      <div className="container">
        <p>
          <span>{data?.subTitle}</span>
          {/* <span>NOIR EDITS</span> */}
        </p>
        {/* <h4>Retouching</h4> */}
        <h4>{data?.title}</h4>
        {
          data?.paraArray?.map((elm, ind) => {
            return <p key={ind}>{elm}<br /><br /></p>
          })
        }
        {/* <p>
          Experience the artistry of noir edits at Refine Pixel. Our editors design alluring black-and-white images that display a timeless elegance. Our best noir edits consist of dramatic, moody and cinematic masterpieces.
        </p>

        <p className="paraSpace">
        Let our specialist editors take your images to a bygone era. See how they use highlights and shadows to tell captivating visual stories. Come embrace the beauty and fascination of noir edits only at Refine Pixel.
        </p> */}

        {/* <p className="paraSpace">
          When seeking color correction services, it essential to communicate
          your specific requirements and expectations with the service provider
          to achieve the desired results. your specific requirements and
          expectations with the service provider to achieve the desired results.
        </p> */}

        <SliderPopup screen={{ sc_1: 5, sc_2: 5, sc_3: 5, sc_4: 5 }}  imgData={{ subImagesArray: data?.subImagesArray,subImagesTitle:data?.subImagesTitle}} head_white={true} />
      </div>
    </section>
  );
};

export default Thirdservisec;
