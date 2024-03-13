import React, { Fragment, useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const Faq = ({ data, data_1 }) => {
  const [active, setActive] = useState({ div: 0, test: 0 });

  console.log(active);

  useEffect(() => {
    setActive({ div: 0, text: 0 });
  }, []);

  return (
    <section className="faqArea">
      <div className="container">
        <h3 className="text_Center">Frequently Asked Questions</h3>

        <div className="faq flex wrap gap10 justSpaceBetween">
          <div className="card w100">
            {data.map((ele, i) => {
              return (
                <Fragment key={i}>
                  <div className="main col100">
                    <div
                      className="title flex alignCenter justSpaceBetween"
                      onClick={() => setActive({ div: 0, text: i })}
                    >
                      <h4>{ele.title}</h4>

                      <BsChevronRight
                        className={`${
                          active.text == i && active.div === 0 ? "active" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`ans ${
                        active.text == i && active.div === 0 ? "active" : ""
                      }`}
                    >
                      <p>{ele.Description}</p>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>

          <div className="card col50">
            {data_1.map((ele, i) => {
              return (
                <Fragment key={i}>
                  <div className="main col100">
                    <div
                      className="title flex alignCenter justSpaceBetween"
                      onClick={() => setActive({ div: 1, text: i })}
                    >
                      <h4>{ele.title}</h4>

                      <BsChevronRight
                        className={`${
                          active.text == i && active.div === 1 ? "active" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`ans ${
                        active.text == i && active.div === 1 ? "active" : ""
                      }`}
                    >
                      <p>{ele.Description}</p>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
