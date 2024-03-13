import React from "react";

export const Aboutbred = ({bread ,des}) => {
  return (
    <>
      <div className="aboutbred">
        <div className="container">
            <h3>{bread}</h3>
            <p>{des}</p>
        </div>
      </div>
    </>
  );
};