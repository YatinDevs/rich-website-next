import Blog from "@/includes/Blog"
import Blogs from "@/includes/Blogs"
import Breadcrumb from "@/includes/Breadscrumb"
import CaseStudies from "@/includes/CaseStudies"
import Quote from "@/includes/components/Quote"
import EnquiryFlex from "@/includes/EnquiryFlex";
import Digital from "@/includes/Digital"
import Enquiry from "@/includes/Enquiry"
import Faq from "@/includes/Faq"
import FlexBanner from "@/includes/FlexBanner"
import FlexBenefits from "@/includes/FlexBenefit"

import ServiceIntro from "@/includes/ServiceIntro"

import Testimonials from "@/includes/Testimonials"
import { notFound } from "next/navigation"

export async function generateStaticParams() {

  try{
    const base_url = process.env.NEXT_PUBLIC_API_URL+"products";
        const res = await fetch(base_url)
        const data = await res.json();
        

        if (!data) {
          return {
            notFound: true,
          }
        }
      
        // Pass data to the page via props
        

        return data.data.map((product) => ({
          details: product.title .toLowerCase()                       
          .replace(/\s+/g, '-')                  // Replace spaces with dashes
          .replace(/[^\w\-]+/g, '')              // Remove all non-word characters
          .replace(/\-\-+/g, '-')                // Replace multiple dashes with a single dash
          .replace(/^-+/, '')                    // Trim dashes from the start
          .replace(/-+$/, '')  // Adjust the structure as needed (e.g., slug or id)
        }));



      }catch(error){
        throw new Error(error);
      }

}

const ProductDetails = async ({params}) => {



const result = await getData();
let filterData;

if(params){
  filterData = result.filter(store=>store.title==params?.details.replace(/\s+/g, '-')                  // Replace spaces with dashes
  .replace(/[^\w\-]+/g, '')              // Remove all non-word characters
  .replace(/\-\-+/g, '-')                // Replace multiple dashes with a single dash
  .replace(/^-+/, '')                    // Trim dashes from the start
  .replace(/-+$/, '')                    // Trim dashes from the end
  .toLowerCase()                         // Convert to lowercase for proper capitalization
  .split('-')                            // Split the string into words by dashes
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
  .join(' '));
}
if(!params){
  return{
    notFound:true
  }
}





// const filteredData = data.filter(store => 
//   store.product_id.some(p => p.product_id === targetProductId)
// );


    return (
      <>
      

    {/* <h2>This is detail page: {params.details}</h2> */}
    <Breadcrumb page="Products" subpage={params} />
    <ServiceIntro subpage={params}/>
    <Digital subpage={params}/>

    <FlexBenefits subpage={params}/>
 
<CaseStudies product={filterData[0]?.id?filterData[0].id:0} subpage={params.details}/>


<Quote/>

    <FlexBanner/>
    <Testimonials/>
    <Faq subpage={params}/>
    <Blog/>
    <Enquiry/>
    <EnquiryFlex/>

      </>
    )
  }
  
  export default ProductDetails


  async function getData () {

    try{
  const base_url = process.env.NEXT_PUBLIC_API_URL+"products";
      const res = await fetch(base_url)
      const data = await res.json();
    
      // Pass data to the page via props
      return data.data
    }catch(error){
      throw new Error(error);
    }
  
  }