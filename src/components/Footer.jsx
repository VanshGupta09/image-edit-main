import React from "react";

import { IoIosMail } from "react-icons/io";
// import { ImPhone } from "react-icons/bs";
import { ImLocation, ImPhone } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container space flex">
          <div className="logo col30">
            <img src={"assets/logo.png"} alt="Logo" height={300} width={200} />
            <p>
              The photographs taken by Wedshot tell the story of our wedding day
              perfectly. They managed to capture the essence of every moment,
              and looking back at the images brings us back to that magical day.
              We are forever grateful.
            </p>
          </div>
          <div className="services">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href={"/services"}>Images editing</Link>
              </li>
              <li>
                <Link href={"/video_edit"}>Video editing</Link>
              </li>
              <li>
                <Link href={"/graphic_designing"}>Graphic Designing</Link>
              </li>
              <li>
                <Link href={"/motion_video"}>Motion Graphics video</Link>
              </li>
              <li>
                <Link href={"/web_design_and_developement"}>
                  Web Design and Developement
                </Link>
              </li>
            </ul>
          </div>
          <div className="location col30">
            <h4>Our Location</h4>
            <ul>
              <li>
                <ImLocation /> 14275 Commerce Drive, Garden Grove , CA 92843
              </li>
              <li>
                <IoIosMail /> cs@refinepixel.com
              </li>
              <li>
                <ImPhone /> +91 714 646 7977
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023 Photography, All rights reserved. Powered by{" "}
        <a target="_blank" href="https://weebinnovation.com/">
          Weeb Innovation
        </a>
      </div>
    </>
  );
};

export default Footer;
