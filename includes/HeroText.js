
import React from 'react'


import Link from 'next/link';



const HeroText = ({result}) => {
  return (
    <>
   
    <div className="" >
 
        <h4 className="text-5xl sm:text-5xl text-capitalize antialiased capitalize mb-2 text-sky-500  font-semibold " data-aos="fade-up" data-aos-delay="100" > {result?.subtitle}  </h4>
      
    <h2 className="text-xl sm:text-2xl text-slate-800 font-bold antialiased capitalize mb-3 " data-aos="fade-up" data-aos-delay="200">
    {result?.title}
    </h2>
    <p className="" style={{"fontSize":"18px"}} data-aos="fade-up" data-aos-delay="300"> {result?.description}.  </p>
    <div className="my-5 flex" data-aos="fade-up" data-aos-delay="400">
        <Link href={"/schedule-a-demo"} className="bg-sky-600 text-white px-5 sm:px-10 py-2 rounded-full me-2 sm:me-5 hover:bg-sky-700 capitalize ">Schedule a demo</Link>
        <Link href={'/contact'} className="bg-blue-900 text-white px-5 sm:px-10 py-2 rounded-full  hover:bg-blue-950 capitalize">Talk  to Sales</Link>
    </div>
   </div>
    </>
  )
}

export default HeroText




  
 