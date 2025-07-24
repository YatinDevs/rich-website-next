"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Skeleton } from "@/components/ui/skeleton"
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Testimonials() {
  return (
    <>
    <div className="py-10  sm:py-16 lg:py-24" data-aos="fade-up" data-aos-delay="100">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
        <div className="card border border-blue-700  bg-base-100 shadow-xl flex flex-col sm:flex-row min-h-80">
          <div className="sm:w-1/3 bg-blue-900 rounded-ee-[100px] flex justify-center items-center px-20 quotes relative ">
            <h2 className="text-2xl  py-3 sm:py-0 sm:text-4xl text-white font-semibold">
              What Our Customers Saying
            </h2>
            <div className="absolute top-2 left-5 sm:top-10 sm:left-10">
              <Image
                src={"/qutoe.png"}
                width={50}
                height={100}
                style={{"width": "50", "height": "100"}}
                alt={"testimonials"}
                priority={true}
              />
            </div>
            <div className="absolute bottom-2 right-20 sm:bottom-10 sm:right-10 rotate-180">
              <Image
                src={"/qutoe.png"}
                width={50}
                height={100}
                style={{"width": "50", "height": "100"}}
                alt={"testimonials"}
                priority={true}
              />
            </div>
          </div>

          <Review />
        </div>
      </div>
    </div>
  
    </>
  );
}

export function Review() {

  const [feedback,setFeedback] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
const fetchReviewData= async ()=>{
try{
  const base_url = process.env.NEXT_PUBLIC_API_URL+'reviews';
  const res = await fetch(base_url);
  const data = await res.json();
  setFeedback(data.data);

}catch(error){
  throw new Error(error);
}finally {
  setLoading(false); // Set loading to false after fetching images
}
}

fetchReviewData();
deleteCookie("otpValidated");
deleteCookie("userFormSubmitted");

function deleteCookie(name) {
  document.cookie = `${name}=; path='/get-quote'; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}
sessionStorage.removeItem('response_id');


  },[])


  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
  
  }, [emblaApi]);
  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">

{feedback.map((reviewData,index)=>(
 <div className="embla__slide sm:py-20" key={index}>
  {!loading?( <Quotes description={reviewData.quotes} username={reviewData.username} designation={reviewData.designation}/>):( <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>)}

 </div>
))}
         
       
        </div>
      </div>
    </>
  );
}

export function Quotes({description,username,designation}){
  return(
    <>
      <div className=" flex flex-col justify-center py-10 sm:py-0  px-10 sm:px-20">
              <p className="text-justify">
              {description}
              </p>
              <div className="py-10 sm:py-0">
                <h2 className="text-end sm:mt-10 text-2xl">- {username}</h2>
                <h6 className="text-end ">{designation==="0"?'':designation}</h6>
              </div>
            </div>
    </>
  )
}
