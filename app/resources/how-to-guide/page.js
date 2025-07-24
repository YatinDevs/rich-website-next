'use client'
import Enquiry from '@/includes/Enquiry'
import Testimonials from '@/includes/Testimonials'
import React,{useEffect,useState} from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'

import { HiOutlineArrowDown } from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa";
import Breadcrumb from '@/includes/Breadscrumb';



const SampleSms = [
  {
    id:1,
    title:"Promotional SMS Templates",
    description:"Enhance your marketing campaigns with our curated Promotional SMS templates. Designed for maximum impact, these templates help you craft engaging messages for product launches, sales, and exclusive offers. Perfect for driving customer engagement and boosting results across industries!",
    link:""
  },
  {
    id:2,
    title:"Transactional SMS Templates",
    description:"Simplify your transactional communications with our ready-to-use Transactional SMS templates. Whether for order confirmations, payment alerts, account updates, or appointment reminders, these templates ensure clear, professional, and timely messages to keep your customers informed and engaged. Perfect for seamless customer service across industries.",
    link:""
  },
  {
    id:3,
    title:"OTP SMS Templates",
    description:"Secure your user interactions with our ready-to-use OTP SMS templates. Designed for delivering One-Time Passwords securely and efficiently, these templates ensure fast, reliable, and clear communication for user authentication and account security across various platforms and industries.",
    link:""
  }

]






const Guide = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
   
    });

    return () => {
      AOS.refresh();
    };
  }, []);

const [introduction,setIntroduction] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{
const brochuresData = async () =>{
  try{
const res = await fetch('https://richadmin.demovoting.com/api/brochures');
const data = await res.json();
setIntroduction(data.data);

  }catch(error){
    throw new Error(error);
  }finally{
    setLoading(false);
  }
}

brochuresData();

},[])


const [magzines,setMagzines] = useState([]);

useEffect(()=>{
  const magzinesData = async () =>{
    try{
  const res = await fetch('https://richadmin.demovoting.com/api/magzines');
  const data = await res.json();
  setMagzines(data.data);
  
    }catch(error){
      throw new Error(error);
    }finally{
      setLoading(false);
    }
  }
  
  magzinesData();
  
  },[])






  return (
    <>

    <Breadcrumb page={"Resources"} subpage={{details:"how-to-guide"}}/>
    <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl "> 

<div>
            <h2 className="font-semibold text-4xl text-center mt-10" data-aos="fade-up" data-aos-delay="50">Our Resources</h2>

            {loading?(<div className="flex items-center space-x-4">
  
      <div className="space-y-2">
        <Skeleton className="h-4 w-[1000px]" />
        <Skeleton className="h-4 w-[1000px]" />
      </div>
    </div>):(     <p  className=" text-justify sm:text-center mt-3 mb-10" data-aos="fade-up"    data-aos-delay="100">
        {introduction[0]?introduction[0].introduction:''}
            </p>)}


       
          
        </div>

 {magzines.map((magzine,index)=>(

<Download key={index} title={magzine.title} subtitle={magzine.subtitle} description={magzine.description} document= {`https://richadmin.demovoting.com/storage/${magzine.document}`} image={`https://richadmin.demovoting.com/storage/${magzine.image}`}/>
 ))}   

</div>


<div>
<div className=" px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl py-24">
        <div>
            <h2 className="font-semibold text-4xl text-center " data-aos="fade-up" data-aos-delay="50">Ready-to-Use Bulk SMS Templates for Every Industry</h2>
            <p className=" text-justify sm:text-center mt-3 mb-10" data-aos="fade-up" data-aos-delay="100">
            Our templates simplify the process of creating impactful messages, saving you time and effort while ensuring your campaigns resonate with your target audience. Whether you&apos;re running a marketing campaign, sending updates, or managing customer relationships, our industry-specific SMS templates help you communicate effectively, enhancing engagement and driving results.
            </p>
          
        </div>

        <div className="flex flex-row flex-wrap gap-5">

{SampleSms.map((plan,id)=>

<Sample key={id} title={plan.title} description={plan.description}/>

  
)}

      

        </div>

       </div>
</div>




        <Testimonials/>
        <Enquiry/>
    </>
  )
}

export default Guide

export function Download({title,subtitle,description,document,image}){
  return(
      <>
      <div >
<div className="hero">
<div className="hero-content flex-col lg:flex-row gap-x-20" >
 <Image src={image} width={200} height={100}  alt={'download'}/>
  <div >
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="py-6">
{description}
    </p>
    <a href={document} target='_blank' className="btn bg-blue-900 text-white">Download PDF <FaRegFilePdf /></a>
  </div>
</div>
</div>
</div>
      </>
  )
}


export function Sample({title,description,lnk}){
  return(
      <>
            <div className="card bg-sky-100 hover:bg-blue-950 hover:text-white w-[380px] shadow-md hover:shadow-sm cursor-pointer" data-aos="fade-down" >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{description}</p>
        <div className="card-actions flex flex-col gap-y-3 justify-center mt-3">
        <HiOutlineArrowDown className=" mx-auto font-bold text-md animate__animated animate__slideInDown  animate__infinite	infinite text-2xl "/>
          <button className="btn bg-sky-700 text-white mx-auto"> Download Sample PDF <FaRegFilePdf /></button>
        </div>
      </div>
    </div>
      
      </>
  )
}