import React from "react";
import Head from "next/head";
import { Aboutbred } from "@/components/Aboutbred";
import Layouts from "@/components/Layouts";
import Service1 from "@/components/Service1";
import VideoSec from "@/components/VideoSec";
import Thirdservisec from "@/components/Thirdservisec";
import ReactCompareImage from "react-compare-image";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

const GraphicDesigning = () => {
  const data = [
    {
      title: "What Is Included With Color Correction Services?",
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What Is Included With Color Correction Services?",
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What Is Included With Color Correction Services?",
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const data_1 = [
    {
      title: "What Is Included With Color Correction Services?",
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What Is Included With Color Correction Services?",
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What Is Included With Color Correction Services?",
      Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layouts>
        <Aboutbred bread={"Graphic Designing"} />
        <div className="ped40"></div>
        <Service1 data={{ imgPath: "./assets/refinePixelImages/g1.jpg", imageDir: true, button: true,btnLink:"/gallery", subTitle: "Graphic Designing", btnText: "View our portfolio", title: "Designing the Face of Your Brand with Visual Identity Magic!", paraArray: ["Embark on a journey to sculpt the very essence of your brand's identity with our Visual Identity Magic service. Our expert team harnesses the power of design to craft captivating visuals that resonate with your audience, ensuring your brand stands out in a crowded digital landscape."] }} />
    
        <Thirdservisec data={{ title: "Creative Graphic Design: Boost Your Marketing Efforts", subTitle: "Graphic Designing",btnLink:"/gallery", paraArray: ["Unleash the power of creative graphic design to supercharge your marketing campaigns. Our expert team blends artistic flair with strategic thinking to craft visually stunning assets that captivate your audience and drive results. From eye-catching social media graphics to compelling print materials, we tailor each design to effectively communicate your brand message and engage your target audience.", "Whether you're launching a new product, promoting an event, or enhancing your brand's online presence, our bespoke designs are sure to leave a lasting impression and elevate your marketing efforts to new heights."] }} />
        <Service1 data={{ imgPath: "./assets/refinePixelImages/g2.jpg",imageDir: true, button: true,btnLink:"/gallery", subTitle: "Graphic Designing", btnText: "View our portfolio​", title: "Crafting Eye-catching Designs to Make Your Brand Stand Out!", paraArray: ["Embark on a journey of visual storytelling with our expert design team, dedicated to crafting captivating designs that elevate your brand above the rest. From striking logos to immersive website graphics, we specialize in creating a visual identity that resonates with your audience and leaves a lasting impression"] }} />
        <Service1 data={{ imgPath: "./assets/refinePixelImages/g3.jpg",imageDir: false, button: true,btnLink:"/gallery", subTitle: "Graphic Designing", btnText: "View our portfolio​", title: "Creative Publication Graphic Design Solutions", paraArray: ["Immerse your publication in a world of creativity with our bespoke graphic design solutions. From eye-catching layouts to compelling visuals, we tailor our designs to breathe life into your content and engage your readers."] }} />
        <VideoSec />
        <Service1 data={{ imgPath: "./assets/refinePixelImages/g4.jpg",imageDir: true, button: true,btnLink:"/gallery", subTitle: "Graphic Designing", btnText: "View our portfolio​", title: "Professional Graphic Art & Illustration Services Tailored for You", paraArray: ["Immerse yourself in the world of professional graphic art and illustration services, meticulously tailored to bring your vision to life. From captivating digital illustrations to stunning graphic designs, our expert team combines artistic flair with technical expertise to create bespoke visuals that resonate with your audience."] }} />
        <div className="ped40"></div>

        {/* <section className="Thirdservice samplework">
          <div className="container">
            <div className="flex gap">
              <div className="col50">
                {" "}
                <ReactCompareImage
                  leftImage={"/assets/after.webp"}
                  rightImage={"/assets/before.webp"}
                />
              </div>
              <div className="col50">
                {" "}
                <ReactCompareImage
                  leftImage={"/assets/after.webp"}
                  rightImage={"/assets/before.webp"}
                />
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="samplework1">
          <div className="container">
            <ReactCompareImage
              leftImage={"/assets/after.webp"}
              rightImage={"/assets/before.webp"}
            />
          </div>
        </section> */}

        {/* <Faq data={data} data_1={data_1} /> */}

        <Cta />

      </Layouts>
    </>
  );
};

export default GraphicDesigning;
