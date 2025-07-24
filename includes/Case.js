import Image from "next/image";
import Link from "next/link";

async function get_url(industry=0,product=0){
  try{

    if(industry!==0 && product!==0){


    const base_url = process.env.NEXT_PUBLIC_API_URL;



        const industry_res = await fetch(base_url+"industry")
        const industry_data = await industry_res.json();

        const filter_industry = industry_data.data.filter((item)=>item.id===industry)
        
        
        const product_res = await fetch(base_url+"products")
        const product_data = await product_res.json();

      
        const filter_product = product_data.data.filter((item)=>item.id===product);


     


        return `/industries/${filter_industry[0].title.toLowerCase()}/${filter_product[0].title.replace(/\s+/g, '-')                  
          .replace(/[^\w\-]+/g, '')              
          .replace(/\-\-+/g, '-')               
          .replace(/^-+/, '')                 
          .replace(/-+$/, '')                    
          .toLowerCase()}`;

        }

        return 0;
        
    
    
      }catch(error){
        throw new Error(error);
      }


}



export default async function Case({title,icon,industry_id,product_id}) {


  const result = await get_url(industry_id,product_id);

  


  return (
    <>

    <Link href={result?'#':"#"}>
    <div className=" group card bg-sky-100 hover:bg-blue-950  hover:text-white w-[350px] shadow-md hover:shadow-sm cursor-pointer">
        <div className="card-body flex flex-row-reverse justify-between">

          <div className="w-full  ps-16">

          <h2 className="card-title  text-xl ">{title}</h2>
          </div>
          <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH+icon} width={25} height={25} alt={'store'} className="transition duration-300 group-hover:invert"/>
          {/* <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p> */}
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </Link>
 
    </>
  );
}
