import React from "react";
import Link from "next/link";

export const Pricing_card = ({ title, sub_title, s_title_span, p, list,btn_value }) => {
  return (
    <>
      <div className="Pricing_card">
        <div className="title">
          <h5>{title}</h5>
        </div>  
        <div className="card_body">
          <h4>
            {sub_title} <span>{s_title_span}</span>
          </h4>
          <Link className="btn" href="/">
            {btn_value}
          </Link>
          <p>{p}</p>
          <ul className="mt10">
            <li>
              {/* <p>Light Balance</p> */}
            </li>
            {list?.map((elm, ind) => {
              return (
                <li>
                  <p>{elm}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
