import Banner from "@/includes/Banner";
import BenfitsHome from "@/includes/BenfitsHome";
import Blog from "@/includes/Blog";
import Counter from "@/includes/Counter";
import Enquiry from "@/includes/Enquiry";
import EnquiryFlex from "@/includes/EnquiryFlex";
import Faq from "@/includes/Faq";
import FlexBanner from "@/includes/FlexBanner";
import IndustryAll from "@/includes/Industry";
import LogoCloud from "@/includes/LogoCloud";
import Offer from "@/includes/Offer";
import Popup from "@/includes/Popup";
import Products from "@/includes/Products";
import Services from "@/includes/Services";
import Testimonials from "@/includes/Testimonials";
import Image from "next/image";
import AOSInitializer from "@/includes/components/AOSInitializer";

export default function Home() {
  return (
    <>
      <AOSInitializer />
      <Banner />
      <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-10 mt-20 sm:mt-0 ">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2
            className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Smart Communications
          </h2>
          <p
            className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Seamless Connectivity for Every Business Need
          </p>
        </div>
        <Products />
      </div>
      {/* <Services reverse={true}/> */}
      <Counter />
      {/* <LogoCloud/> */}
      <IndustryAll />

      <FlexBanner />
      <Enquiry />
      <BenfitsHome />
      <Offer />
      <Testimonials />
      <Faq />
      <Blog />
      <EnquiryFlex />
      {/* <Popup/> */}
    </>
  );
}
export function generateMetadata() {
  return {
    title:
      "Best Software & Website Development Company in Nashik | Rich System Solutions Pvt. Ltd.",
    description:
      "Rich System Solutions Pvt. Ltd. is a leading company in Nashik, India, specializing in custom software development, website design, and web application solutions. Our expert team delivers innovative, scalable digital products tailored to your business goals. We also offer digital marketing services to enhance your online presence.",
  };
}
