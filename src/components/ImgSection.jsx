import React from "react";

import imgData from "@/components/Gallery";


export const ImgSection = () => {
  return (
    <>
      <div className="img-section">
        <div className="flex">
          {imgData.map((elm, index) => {
            return <img key={index} className="img" src={elm.path} width={200} height={200} alt="Image Section" />
          })}
        </div>
      </div>
    </>
  )
}


export default ImgSection;