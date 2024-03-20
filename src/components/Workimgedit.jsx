import React from 'react'
import ReactCompareImage from "react-compare-image";

const Workimgedit = () => {
  return (
    <>
    <div className="workimgedit">
        <div className="container">
            <h3>Images Editing Work</h3>
            <div className="flex gap30">
                <div className="col50"><ReactCompareImage leftImage={"./assets/ColourCorrection/3_a.jpg"} rightImage={"./assets/ColourCorrection/3_b.jpg"} />
                <div className="ped30"></div>
                <ReactCompareImage leftImage={"./assets/newbornbaby/1_a.jpg"} rightImage={"./assets/newbornbaby/1_b.jpg"} /></div>
                <div className="col50"><ReactCompareImage leftImage={"./assets/retouching/removeChangingBackground/2_a.jpg"} rightImage={"./assets/retouching/removeChangingBackground/2_b.jpg"} />
                <div className="ped30"></div>
                <ReactCompareImage leftImage={"./assets/RealEstate/1_a.jpg"} rightImage={"./assets/RealEstate/1_b.jpg"} /></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Workimgedit