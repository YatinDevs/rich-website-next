import Corporate from './components/Corporate'
import Image from 'next/image'


const getCorporateData = async() =>{
  try{
    const base_url = process.env.NEXT_PUBLIC_API_URL+"industry";
        const res = await fetch(base_url)
        const data = await res.json();
      
        // Pass data to the page via props
        return data.data
      }catch(error){
        throw new Error(error);
      }
}

const IndustryAll = async () => {
  const result = await getCorporateData();
  return (
    <>
    <div className='py-10  sm:py-16 lg:py-24'>
    <div className=" px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

    <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" data-aos="fade-up" data-aos-delay="100">Corporate Network</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay="200">Connecting Businesses Across the Globe</p>
        </div>
<div className="px-10 md:px-20 flex flex-col-reverse items-center justify-center  md:flex-row md:justify-between" data-aos="fade-up" data-aos-delay="400">
<div className="w-full md:w-1/2 flex flex-row sm:justify-center sm:items-center  gap-3 sm:flex-wrap overflow-x-scroll sm:overflow-hidden" >

{result.map((industry,index)=>(

 <Corporate key={index} icon={industry.icon} title={industry.title}/>
))}

</div>
<div className="hidden sm:w-full md:w-1/2 sm:flex sm:flex-col sm:items-center md:flex-row sm:justify-center" >
    <Image src={'/industry_man.png'} width={700} height={100} alt={'person'}/>
</div>

</div>
</div>
    </div>

    </>
  )
}



export default IndustryAll