import React from "react";
import ReactCompareImage from "react-compare-image";
import Link from "next/link";

const ServiceHome = ({ data }) => {
  return (
    <>
      <section className="service_home">
        <div className="container">
          <div className="flex gap">
            <div className="col50" style={{ order: data.imageDir ? 1 : 2 }}>
              <p>
                <span>{data.subTitle}</span>
              </p>
              <h3>{data.subContent}</h3>
              <p className="ped20">
                {data.content}
              </p>
              {
                data.button ? <Link className="btn" href={data.btnLink}>
                  Read More
                </Link> : ""
              }

            </div>
            <div
              className="col50 imageTab"
              style={{ order: data.imageDir ? 2 : 1 }}
            >
              <ReactCompareImage leftImage={"/assets/after.webp"} rightImage={"/assets/before.webp"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHome;