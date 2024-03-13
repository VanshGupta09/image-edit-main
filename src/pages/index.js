import Head from "next/head";
import Layouts from "@/components/Layouts";
import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import Service1 from "@/components/Service1";
import { Textmonial } from "@/components/Textmonial";
import VideoSec from "@/components/VideoSec";
import ChooseUs from "@/styles/ChooseUs";
import ImgSection from "@/components/ImgSection";
import ServiceHome from "@/components/ServiceHome";

// Image imported
// import aboutImg from "@/assets/about.webp";

export default function Home() {
  // console.log("Start");
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* font awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Layouts>
        <Banner />
        <AboutSection
          data={{
            subTitle: "Who we are",
            title: "Meet the Power of Brilliant Editing!",
            description:
              "Refine Pixel is your creative alchemist! We offer dynamic editing services that transform your captured photos into visual masterpieces. We weave your work into wonders! Creating captivating narratives through your ideas.",
            btnName: "Read More",
            btnLink: "/",
            image: "/assets/about.webp",
          }}
        />

        <ServiceHome data={{ imageDir: true, subTitle: "Image Editing", subContent: "Images Shine at Refine Pixels!", content: "Take your storytelling through images a notch up with our image editing services! We transform and add spark to every picture we come across. We help you exhibit tales with our creativity, precision and finesse." }} />
        <ServiceHome data={{ imageDir: false, subTitle: "Retouching", content: "Your images will look better thanks to Refine Pixel's retouching and editing services. Redefining beauty, accuracy, subtlety, and inventiveness all work together to bring out each shot's ideal core." }} />
        <VideoSec />
        <ServiceHome data={{ imageDir: true, subTitle: "Retouching", subContent: "Allow Us to Show You Our Retouching Magic!", content: "Your images will look better thanks to Refine Pixel's retouching and editing services. Redefining beauty, accuracy, subtlety, and inventiveness all work together to bring out each shot's ideal core." }} />
        <ServiceHome data={{ imageDir: false, subTitle: "Product Photo Editing", subContent: "Picture-Perfect Transformation by Refine Pixel!", content: "With Refine Pixel's Product Photo Editing, take center stage. We meticulously polish each element, turning your images into an impressive exhibition of quality. Let us enhance your photos' allure." }} />
        <ChooseUs />
        <Textmonial />
        <ImgSection />
      </Layouts>
    </>
  );
}
