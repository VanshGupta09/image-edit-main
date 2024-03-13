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

const Imagesediting = () => {
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
        <Aboutbred bread={"Images Editing"} />
        <div className="ped40"></div>
        <Service1 data={{ imageDir: false, button:true,subTitle:"Colour correction", title: "Color Magic: Brighten Your Images with Refine Pixel.", btnText: "Buy Now​ Call Today​" ,paraArray:["We also offer hybrid editing services at competitive prices! Our designers and editors merge various editing styles to create visually unique images.","We create images using our best elements and expertise.Our approach includes blending lively colors with modern compositions or interesting textures."," We guarantee to deliver a classic charm and one-of-a-kind visual experience. So, enhance your images with our hybrid edits. "]}} />
        <Service1 data={{ imageDir: true, button:true,subTitle:"Culling", title: "Sharp Cut: Image Culling & Selection", btnText: "Buy Now​ Call Today​" ,paraArray:["Cut through the clutter effortlessly! At Refine Pixel, our image culling & selection service simplifies your picture-picking process.","Our skilled team meticulously analyzes each image, eliminating blurriness, duplicates, and unflattering angles. What's left? A refined selection of your best shots, saving you time and effort.","Let us handle the heavy lifting while you enjoy a streamlined selection process!"]}} />
        <Service1 data={{ imageDir: false, button:true,subTitle:"Retouching", title: "Refine Pixel: Elevating Your Visuals to Perfection", btnText: "Buy Now​ Call Today​" ,paraArray:["Refine Pixel specialises in comprehensive image retouching services, ensuring your photographs reach their full potential. From portrait retouching to background changes, body sculpting, high-end retouching, nude photo enhancements, and newborn baby retouching, we offer a diverse range of solutions tailored to your needs. ","Whether refining physique or preserving natural beauty, we transform ordinary photos into extraordinary pieces of art. Trust us for professional and discreet retouching services that capture the essence of each moment perfectly."]}} />
        <Service1 data={{ imageDir: true, button:true,subTitle:" Real-estate Editing", title: "Pixel Perfect: Real Estate Editing Expertise", btnText: "Buy Now​ Call Today​" ,paraArray:["Make your property pop with our simple and quirky real estate editing service! At Refine Pixel, we take your ordinary photos and turn them into eye-catching showcases.","Our experts enhance lighting, colors, and composition to create captivating images that stand out in the market. From beautiful panoramas to enticing close-ups, we ensure your listings catch the eye of potential buyers."," Let us work our magic on your real estate photos and watch as your property sells itself!"]}} />
        <Thirdservisec data={{title:"Signature Snips: Image Editing Service",subTitle:"Signature Edit",paraArray:["Tired of tangled images? Let us work our magic! At Signature Snips, we trim the chaos from your photos with finesse. Our quirky team wields digital scissors, snipping away imperfections, adjusting lighting, and enhancing colours.","From pesky blemishes to dull backgrounds, we'll transform your images into true masterpieces. Don't settle for ordinary edits—let us sprinkle some magic dust on your visuals!"]}}/>
        <Service1 data={{ imageDir: false, button:true,subTitle:"New Born baby", title: "Tiny Tweak: Newborn Baby Editing", btnText: "Buy Now​ Call Today​" ,paraArray:["Welcome your bundle of joy with picture-perfect perfection! Our newborn baby editing service at Refine pixel ensures every precious moment is captured flawlessly.","From softening skin tones to enhancing those adorable little features, our expert editors delicately craft each image to perfection.","Preserve those precious memories with a touch of magic, leaving you with heart-melting snapshots to cherish forever. Let us sprinkle some stardust on your newborn photos!"]}} />
        <Service1 data={{ imageDir: true, button:true,subTitle:"Boudoir", title: "Refine Pixel Boudoir: Where Magic Meets Photography", btnText: "Buy Now​ Call Today​" ,paraArray:["Get ready to wow with our special boudoir editing service at Refine pixel! We're here to make your intimate photos even more amazing.","Our team knows just how to enhance your natural beauty, making sure every detail looks perfect. From smoothing skin to brightening colors, we'll give your photos that extra sparkle.","Let us work our magic on your boudoir shots, creating stunning images that capture your unique charm!  "]}} />

        {/* <Service1 data={{ imageDir: true, button:true, title: "Noir Edits", btnText: "Buy Now​ Call Today​" ,paraArray:["Experience the artistry of noir edits at Refine Pixel. Our editors design alluring black-and-white images that d,isplay a timeless elegance. Our best noir edits consist of dramatic, moody and cinematic masterpieces.","Let our specialist editors take your images to a bygone era. See how they use highlights and shadows to tell captivating visual stories. Come embrace the beauty and fascination of noir edits only at Refine Pixel."]}} />
        <VideoSec /> */}
        
        {/* <Service1 data={{ imageDir: true, button:true, subTitle: "New Born baby", btnText: "Buy Now​ Call Today​" }} /> */}
        {/* <Service1 data={{ imageDir: false, button:true, subTitle: "Boudoir", btnText: "Buy Now​ Call Today​" }} /> */}
        <div className="ped40"></div>

        <section className="Thirdservice samplework">
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

      </Layouts>
    </>
  );
};

export default Imagesediting;
