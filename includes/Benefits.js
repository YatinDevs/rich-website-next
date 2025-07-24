import React from "react";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";


async function getBenefits(industry=0){
  try{
 
    if(industry===0 || industry==="0" || industry===''){
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`benefits`);
      const data = await res.json();
      return data.data;
    }else{

      const res_id = await fetch(process.env.NEXT_PUBLIC_API_URL+`industry`);
      const data_id = await res_id.json();
const filterInd = data_id.data.filter((item)=>item.title.toLowerCase()===industry);





      const res = await fetch(process.env.NEXT_PUBLIC_API_URL+`industry-benefits`);
      const data = await res.json();

      const filterBenefits = data.data.filter((ben)=>ben.industry_id===filterInd[0].id);

     
      return filterBenefits;
    }

  }catch(error){
    throw new Error(error);
  }
}



export default async function Benefits({subpage}){
  const result = await getBenefits(subpage.industry?subpage.industry:0);
  // console.log(result);
  // console.log("This is industry benefits",result);

    return(
        <>
        {result.map((benefit,i) =>
          benefit.product_name === subpage.details ? ( <div key={i} className="hero px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full ">
          <div className="hero-content flex-col sm:flex-row lg:flex-row-reverse items-center gap-4">
          
         
            <div className="text-white w-full sm:w-3/5">
              <h1 className="text-5xl font-bold mb-2 text-blue-950">{benefit.title}</h1>
              <h1 className="text-3xl font-bold text-blue-950">{benefit.subtitle}</h1>
              <p className="py-2 text-blue-900 antialiased font-medium text-justify">
              {benefit.description}
           
              </p>
        
        <div>
        
        <ul className='my-2 ps-5  text-blue-900 antialiased font-medium'>
        {benefit.benefits.map((items, index) => (
                  <li key={index} className='mb-3 flex flex-row items-center'>
                    <FcApproval className='me-3 text-4xl' />
                    {items.benefits}
                  </li>
                ))}
              
              </ul>
        </div>
        
           
              {/* <button className="bg-white px-10 text-black rounded-full py-3">Get Started</button> */}
            </div>
            <div className="w-full sm:w-2/5 p-2">
        <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH+benefit.image} width={450} height={100} alt={'benefits'} />
            </div>
          </div>
        </div>) : null
      )}
         
        </>
    )
}