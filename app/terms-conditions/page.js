import Breadcrumb from "@/includes/Breadscrumb";

async function getData () {

	try{
  const base_url = process.env.NEXT_PUBLIC_API_URL+"terms-conditions";
  // const base_url = "http://127.0.0.1:8000/api/terms-conditions";
	  const res = await fetch(base_url)
	  const data = await res.json();
	
	  // Pass data to the page via props
	  return data.data
	}catch(error){
	  throw new Error(error);
	}
  
  }
  



const Terms = async() => {
  const result = await getData();
  return (
    <>

<Breadcrumb page=" Terms & Conditions"/>
  <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-24">
        {/* Component */}
        <div className="flex max-w-3xl flex-col py-16 md:py-20">
          {/* Title */}
          <h2 className="mb-10 text-3xl font-bold md:text-5xl">
          Terms & Conditions
          </h2>
          <p className="mb-5 text-sm font-bold sm:text-base">
            Last updated as of October 17, 2022
          </p>
          {/* Term */}

          {result.map((terms,i)=>    <div key={i} className="mb-6 flex flex-col items-start gap-y-3">


<p className="font-bold uppercase sm:text-base">{terms.term_heading}</p>



<p className="text-sm sm:text-base text-justify">
{terms.description}
</p>
</div>)}
      
   
        
        </div>
      </div>
    </section>
    </>
  )
}

export default Terms