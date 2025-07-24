import React from 'react'
import Link from "next/link";

const Offer = () => {
  return (
    <>
    
    <div className=" flex items-center py-10  sm:py-5 lg:py-0" data-aos="fade-up" data-aos-delay="100">
    <div className="   px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full flex flex-col-reverse sm:flex-row justify-between items-center sm:items-center  bannerBg gap-4 ">
    <div className="w-full sm:w-1/2 ms-4">
    <h2 className="text-3xl sm:text-4xl text-slate-800 font-bold antialiased capitalize mb-5 mt-16">
    Get more out of Rich System Solution
    </h2>
        <h4 className="text-2xl   text-capitalize antialiased capitalize mb-5 text-sky-500  font-semibold ">Do more with the resources you already have. </h4>
    <p className="text-justify mb-5">
    Enhance your operations with Rich System Solution's powerful APIs and versatile plug-ins, enabling seamless automation across platforms. Our advanced services and solutions integrate effortlessly with a wide range of popular applications to streamline your business processes. Whether you're managing productivity with Zoho Applications, running e-commerce stores on WooCommerce or Shopify, or optimizing CRM workflows with Bitrix 24 and HubSpot, Rich System Solution has you covered</p>
    <div className="my-5 flex">
        <Link href={"/schedule-a-demo"} className='text-blue-500' >Contact us now  </Link>

    </div>
   </div>

 
   <div className="w-full sm:w-1/2 p-5">
    {/* <Image  width={1200} height={100} src={'/hero_img.png'} alt={"hero"} className=" scale-x-[-1]"/> */}
    <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="integrations-video.mp4" type="video/mp4" />
        {/* Add fallback for unsupported formats */}
        Your browser does not support the video tag.
      </video>
    </div>
{/* <Slider imgData = {result.image}/> */}

   </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Offer