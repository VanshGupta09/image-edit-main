import React from "react";
import ReactCompareImage from "react-compare-image";

const AfterBefore = ({ before, after }) => {
  return (
    <div className="mainPopup">
      <h4 className="bfr">Before</h4>
      <ReactCompareImage leftImage={before} rightImage={after} />
      <h4 className="aft">After</h4>
    </div>
  );
};

export default AfterBefore;
