import React from 'react'
import ReactCompareImage from "react-compare-image";

const Workimgedit = () => {
  return (
    <>
    <div className="workimgedit">
        <div className="container">
            <h3>Images Editing Work</h3>
            <div className="flex gap30">
                <div className="col50"><ReactCompareImage leftImage={"/assets/after.webp"} rightImage={"/assets/before.webp"} />
                <div className="ped30"></div>
                <ReactCompareImage leftImage={"/assets/after.webp"} rightImage={"/assets/before.webp"} /></div>
                <div className="col50"><ReactCompareImage leftImage={"/assets/after.webp"} rightImage={"/assets/before.webp"} />
                <div className="ped30"></div>
                <ReactCompareImage leftImage={"/assets/after.webp"} rightImage={"/assets/before.webp"} /></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Workimgedit