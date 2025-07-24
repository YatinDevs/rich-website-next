

import Slider from "./Slider";
import Heroglance from "./Heroglance";
import HeroText from "./HeroText";





export default async function Banner(){

  const [result] = await getData();





    return <>

    <div className=" flex flex-col   items-center   min-h-full" >
    <div className="   px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full flex flex-col-reverse sm:flex-row justify-between items-center sm:items-center gap-3  ">
      <div className="w-full sm:w-1/2 ms-4">

{/* <HeroText result={result}/> */}

<HeroText result={result}/>

      </div>

 
   <div className="w-full sm:w-1/2 ">
    {/* <Image  width={1200} height={100} src={'/hero_img.png'} alt={"hero"} className=" scale-x-[-1]"/> */}
<Heroglance/>
{/* <Slider imgData = {result.image}/> */}

   </div>
    </div>
    </div>

   
 
    </>
}


async function getData () {

  try{
const base_url = process.env.NEXT_PUBLIC_API_URL+"heroes";
    const res = await fetch(base_url)
    const data = await res.json();
  
    // Pass data to the page via props
    return data.data
  }catch(error){
    throw new Error(error);
  }

}

















