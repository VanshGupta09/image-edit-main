import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiSolidNavigation } from 'react-icons/bi';
import {FaEnvelope} from 'react-icons/fa';
import Head from "next/head";
import Layouts from "@/components/Layouts";
import { Aboutbred } from "@/components/Aboutbred";

const index = () => {
  return (
    <> <Head>
    <title>Our Work</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Layouts>
  <Aboutbred bread={"Contact Us"} />
      <section className="contact">
        <div className="container flex">
          <form>
          <h4>Feel free to contact</h4>
                <p>Have questions about our digital marketing services or ready to take your online presence to the next level?</p>
                <div className="flex">
                    <input type="text" name="fname" id="" placeholder="First Name"/>
                    <input type="text" name="lname" id="" placeholder="Last Name"/>
                </div>
                <div className="flex">
                    <input type="email" name="email" id="" placeholder="Email"/>
                    <input type="number" name="pnumber" id="" placeholder="Phone Number"/>
                </div>
                <textarea name="msg" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <input className="btn" type="submit" value="Submit"/>
          </form>
          <div className="get-in-touch">
            <h4>Get in touch with us</h4>
            <p>
              Have questions about our digital marketing services or ready to
              take your online presence to the next level? Our team of
              experienced professionals is here to help you succeed.
            </p>
            <div className="flex first-icon">
                <BsFillTelephoneFill />
                  {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
              <div>
                <p>Have any question?</p>
                <p>+91 714 646 7977</p>
              </div>
            </div>
            <div className="flex  second-icon">
                <FaEnvelope/>
              {/* <i className="fa fa-envelope" aria-hidden="true"></i> */}
              <div>
                <p>Write email</p>
                <p>cs@refinepixel.com</p>
              </div>
            </div>
            <div className="flex third-icon">
                <BiSolidNavigation/>
              {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
              <div>
                <p>Visit anytime</p>
                <p>14275 Commerce Drive, Garden Grove , CA 92843</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360697132!2d-74.30932960709077!3d40.697539963305694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1693640685268!5m2!1sen!2sin" width="100%" height="450" style={{border:"none"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
      </Layouts>
    </>
  );
};

export default index;
