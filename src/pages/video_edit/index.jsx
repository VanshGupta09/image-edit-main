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

const Video_edit = () => {
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
        <Aboutbred bread={"Video Editing"} />
        <div className="ped40"></div>
        <Service1 data={{ imageDir: true, imgPath: "./assets/refinePixelImages/v1.jpg", button: true, subTitle: "Video Editing", btnText: "View our portfolio​", title: "Share Your Business Journey Through 2D Animation", paraArray: ["Our 2D animation service is more than just about creating visually stunning videos; it's about weaving narratives that forge strong connections with your audience. By merging strategic thinking with creativity, we produce animated content that not only grabs attention but also compels viewers to engage and act."]}} />
        <Service1 data={{ imgPath: "./assets/refinePixelImages/v2.jpg", imageDir: false, button: true, subTitle: "Video Editing", btnText: "View our portfolio​", title: "Leverage Professional 3D Animation to Amplify Your Message", paraArray: ["Have a story itching to be told? Let's give it dimension with 3D animation! Share your vision with us, and our team of skilled animators will breathe life into it, crafting a dynamic video that speaks directly to your audience."] }} />

        <Thirdservisec data={{
          subTitle: "Video Editing", title: "High-Quality Character Animation: Professional Services for Your Project", paraArray: ["At Weeb Innovation, our team of character designers is renowned for their creativity and expertise in crafting custom characters for animated videos. With a keen eye for detail, we breathe life into our characters by infusing them with emotions, expressions, and distinct personalities, making them truly come alive on screen.", "Whether it's molding characters from clay or sculpting them in 3D, we possess the artistic versatility to bring any vision to fruition. Our character animation isn't just about creating visual appeal; it's about forging genuine connections with your audience. Through our meticulously crafted animations, we help your audience absorb information effortlessly while fostering a deeper understanding and appreciation of your brand.Let us transform your brand's story into a captivating visual experience with our expertly crafted character animations."]
        }} />
        <Service1 data={{ imgPath: "./assets/refinePixelImages/v3.jpg", imageDir: true, button: true, subTitle: "Video Editing", btnText: "View our portfolio​", title: "Explore  in Motion Graphics Design", paraArray: ["In today's fast-paced digital age, static text often gets lost in the shuffle. To truly make your message stand out, you need to speak the language of visuals. At Weeb Innovation, we understand that motion graphics are the key to captivating your audience's attention and delivering your message effectively. Our team specializes in creating engaging motion graphic videos that simplify complex ideas and concepts"] }} />
        < VideoSec />
        <Service1 data={{ imgPath: "./assets/refinePixelImages/v4.jpg", imageDir: true, button: true, subTitle: "Video Editing", btnText: "View our portfolio​", title: "Dynamic Logo Animation Service", paraArray: ["Introducing our Dynamic Logo Animation Service—a cutting-edge solution to elevate your brand's visual identity. At Weeb Innovation, we specialize in crafting captivating animated logos that breathe new life into your brand image.Our team of skilled designers and animators meticulously blend creativity and innovation to deliver logo animations that leave a lasting impression."] }} />
        <Service1 data={{ imgPath: "./assets/refinePixelImages/v5.jpg", imageDir: false, button: true, subTitle: "Video Editing", btnText: "View our portfolio​", title: "Top-tier 2D Infographic Video Production: Let Us Bring Your Ideas to Life!", paraArray: ["Experience top-tier 2D Infographic Video Production with Weeb Innovation: Where Your Ideas Come to Life!Our expert team transforms your concepts into engaging and informative 2D infographic videos that captivate your audience."] }} />
        {/* <div className="ped40"></div> */}

        < section className="Thirdservice samplework" >
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
        </section>
        {/* <section className="samplework1">
          <div className="container">
            <ReactCompareImage
              leftImage={"/assets/after.webp"}
              rightImage={"/assets/before.webp"}
            />
          </div>
        </section> */}

        <Faq data={data} data_1={data_1} />

        <Cta />

      </Layouts >
    </>
  );
};

export default Video_edit;
