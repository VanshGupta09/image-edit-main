import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <>
      <div className="cta">
        <div className="container">
          <h1>
            READY TO <span>REFINE PIXEL</span> YOUR <br /> <span>PHOTO EDITING?</span>
          </h1>

          <div className="button flex justSpaceBetween">
          <Link className="btn" href="/pricing">View Our Price</Link>
          <Link className="btn" href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
