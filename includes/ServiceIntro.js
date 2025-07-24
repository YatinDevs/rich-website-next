import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";




const fetchIntro = async (id) =>{
  try{
    if(id){
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`explores`);
      const data = await res.json();
  
      const filterID = data.data.filter((item)=>item.product_name==id);
  
  
  if(filterID){
    const res1 = await fetch(process.env.NEXT_PUBLIC_API_URL+`explores/${filterID[0].id}`);
    const data1 = await res1.json();
    return data1.data;
  }
      
  if(!filterID){
 
    return {
      notFound:true
    };
  }
  
  
  
  
    }
   
  }catch(error){
    throw new Error(error);
  }
}





export default async function ServiceIntro({subpage}) {
  const introduction = await fetchIntro(subpage.details);
  return (
    <>
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 flex items-center ">
    <div className="card  bg-gradient-to-r from-sky-100 via-sky-200 to-sky-100 shadow-xl flex flex-col sm:flex-row items-center ser-intro px-5 ">
  <div className="w-full sm:w-2/5">
<Image src={process.env.NEXT_PUBLIC_IMAGE_PATH+introduction.image} width={500} height={100} alt={'service-intro'}/>
  </div>

  <div className=" w-full sm:w-3/5    p-5">
    <h2 className="text-4xl font-bold capitalize ">{introduction.title==="Ivr System"?'IVR System':introduction.title==="Bulk Sms"?'Bulk SMS':introduction.title}</h2>
    <h2 className="text-2xl my-3 font-semibold">{introduction.subtitle}</h2>
    <p className="text-sm text-justify antialiased pe-5">{introduction.description}</p>
    <div className=" my-3 sm:my-5 flex flex-row">
      {/* <button className="btn border- rounded-full  border-2 border-sky-500 bg-white text-sky-500 px-10 me-5">Schedule{id}</button> */}
      <Link href="/schedule-a-demo" className="btn border- rounded-full  border-2 border-sky-500 bg-white text-sky-500 px-5 sm:px-10 me-2 sm:me-5 ">Schedule A Demo</Link>
      <Link href='/contact' className="btn bg-blue-950 px-5 sm:px-10 rounded-full text-white border-2">Talk To Sales</Link>
    </div>
  </div>
</div>
    </div>
   
    </>
  );
}
