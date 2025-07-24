import React from 'react'

async function getData () {

    try{
  const base_url = process.env.NEXT_PUBLIC_API_URL+"careers";
      const res = await fetch(base_url)
      const data = await res.json();
    
      // Pass data to the page via props
      return data.data
    }catch(error){
      throw new Error(error);
    }
  
  }

const Careers = async() => {
    const [result] = await getData(); 
  return (
    <>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-44 flex flex-row items-center mt-10">
        <div className="px-10 sm:px-20 flex flex-col sm:flex-row justify-between items-center gap-10">
          <div>
            <Image src={"/careers.jpg"} width={400} height={100}  data-aos="fade-right" data-aos-delay="50" alt={'career'}/>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-3" data-aos="fade-up" data-aos-delay="50"> {result.title}</h2>
            <p className="text-justify" data-aos="fade-up" data-aos-delay="100">
             {result.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Careers  