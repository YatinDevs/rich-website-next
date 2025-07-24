import Case from "./Case";
import Download from "./components/Download";
import Title from "./components/Title";








export default async function CaseStudies({industry=0,product=0,subpage,industry_name,service_name}){

    const result = await getData();

    let filteredData;

 

    if(industry !==0 && product!==0){
       filteredData = result.filter(item => 
        item.industry_id === industry && (product == 0 || item.product_id.some(p => p.product_id == product))
      );
    }else{
       filteredData = (product==0)?result.filter(item => item.industry_id === industry):result.filter(store => 
        store.product_id.some(p => p.product_id == product)
      );
    }
   



  
 
   

    return(
        <>
     
       <div className=" px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-20">
    
<Title industry_id={0} product_id={0} subpage={subpage} industry_name={industry_name} service_name={service_name}/>

        <div className="flex flex-row flex-wrap gap-5 justify-center">
{
    filteredData.map((record,index)=>(
        <Case title={record.title} icon={record.image} industry_id={record.industry_id} product_id={product} />
    ))
}




     
        </div>
<Download industry_id={0} product_id={0}/>

       </div>
        </>
    )
}


async function getData () {

    try{
  const base_url = process.env.NEXT_PUBLIC_API_URL+"industry-subarea";
      const res = await fetch(base_url)
      const data = await res.json();
    
      // Pass data to the page via props
      return data.data
    }catch(error){
      throw new Error(error);
    }
  
  }