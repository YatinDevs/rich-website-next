import Image from "next/image";
import Flex from "./Flex";

async function getData () {

    try{
  const base_url = process.env.NEXT_PUBLIC_API_URL+"offers";

      const res = await fetch(base_url)
      const data = await res.json();
    
      // Pass data to the page via props
      return data.data
    }catch(error){
      throw new Error(error);
    }
  
  }

export default async function FlexBanner(){
    const result = await getData();

    return (
        <>
        <div className="" data-aos="fade-up" data-aos-delay="100">
        <div className="  py-10 flex items-center">

<Image src={process.env.NEXT_PUBLIC_IMAGE_PATH+result[0].image} width={100} height={100} alt={"flex-banner"} style={{"width":"100%"}}/>
  </div>
        </div>
       
        </>
    )
}