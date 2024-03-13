import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BsChevronDown } from 'react-icons/bs';

const Header = () => {
  const mainHeader = useRef();

  
  useEffect(() => {
    function scrollFunction() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mainHeader?.current?.classList?.add("active");
      } else {
        mainHeader?.current?.classList?.remove("active");
      }
    }
    
    window.onscroll = function () {
      scrollFunction();
    };

    console.log(mainHeader.current);
  }, []);

  return (
    <>
      <header ref={mainHeader} className="header" id="header">
        <div className="container flex justSpaceBetween alignCenter">
          <div className="logo">
            <img
              src={"assets/logo.png"}
              alt="Logo Image"
              height={200}
              width={200}
            />
          </div>

          <nav className="nav flex alignCenter">
            <ul className="flex">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li className="serviceNav">
                <Link href={"/services"}className="flex alignCenter gap10">Services <span><BsChevronDown/></span></Link>
                <ul className="level_1_nav">
                  <li><Link href={"/services"}>Images editing</Link></li>
                  <li><Link href={"/video_edit"}>Video editing</Link></li>
                  <li><Link href={"/graphic_designing"}>Graphic Designing</Link></li>
                  <li><Link href={"/web_design_and_developement"}>Web Design and Developement</Link></li>
                  {/* <li><Link href={"/retouching"}>Retouching</Link></li> */}
                  {/* <li><Link href={"/product_photo_editing"}>Product Photo Editing</Link></li> */}
                  <li><Link href={"/software_development"}>Software Development</Link></li>
                </ul>
              </li>
              <li>
                <Link href={"/gallery"}>Our Work</Link>
              </li>
              <li>
                <Link href={"/pricing"}>Our Pricing</Link>
              </li>
              
              <li>
                <Link href={"/faq"}>Faq</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
