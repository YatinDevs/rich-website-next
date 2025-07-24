import Enquiry from '@/includes/Enquiry'
import Testimonials from '@/includes/Testimonials'
import React from 'react'
import Image from "next/image";
import Blog from '@/includes/Blog';
import Breadcrumb from '@/includes/Breadscrumb';



export async function generateStaticParams() {
  try{
    const base_url = process.env.NEXT_PUBLIC_API_URL+"blogs";
        const res = await fetch(base_url)
        const data = await res.json();
        
      
        // Pass data to the page via props
        

        return data.data.map((blog) => ({
          blog: blog.id.toString(), // Adjust the structure as needed (e.g., slug or id)
        }));



      }catch(error){
        throw new Error(error);
      }

}


async function getData (url) {

  try{


    const res = await fetch(url)
    const data = await res.json();
  
    // Pass data to the page via props
    return data.data
  }catch(error){
    throw new Error(error);
  }

}




const BlogView = async ({params}) => {

  const base_url = process.env.NEXT_PUBLIC_API_URL+"blogs/"+params.blog;

  const result = await getData(base_url);
  const date = new Date(result.created_at?result.created_at:0);
  // Options for formatting the date
const options = { day: 'numeric', month: 'long', year: 'numeric' };

// Format the date as "28 July 2022"
const formattedDate = date.toLocaleDateString('en-GB', options);


  return (
    <>

    
<Breadcrumb page="Resources" subpage={params}/>
    <div className="mx-auto">
  

  <div>
  <div className="w-screen bg-white px-10 sm:pt-10">
<main className="relative mx-auto sm:ps-36 md:max-w-screen-lg">
  <div className="top-0 -left-28 mb-10 w-full max-w-lg rounded-md border bg-white px-6 py-6 shadow-md lg:absolute lg:w-56 mt-10 sm:mt-0">
    <div className="pb-2 text-xl font-medium text-blue-900">Table of Contents</div>
    <hr className="h-1 w-10 bg-blue-900" />
    <div className="mt-4">
      {result.details.map((blog_detail,index)=>(
        
   <div className="mb-3" key={index}>
   <a className="mb-1 text-sm font-medium text-blue-900 hover:text-blue-900" href={"#"+index}>{blog_detail.blog_title}</a>
 </div>
      ))}
   
     
    </div>
  </div>
  <article className="text-gray-800 pt-0 w-full max-w-full">
  <div className="mb-3">
  <h2 className="text-4xl mb-3">{result.blog_heading}</h2>
<small className="mb-3">{formattedDate}</small>
<hr/>
  </div>

  <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH+result.blog_image} width={720} height={100} className="mx-auto my-3" alt={result.image_alt}/>
    {/* <h2 id="section-one" className="mb-4 text-3xl font-bold"></h2> */}
    <p className="mb-10 text-gray-600">{result.description}</p>
    <p className="mb-10 text-gray-600">{result.introduction}</p>

    {result.details.map((blog_details,index)=>(

      <div key={index} id={index}>

        {
          (blog_details.blog_title!==null)?<h2  className="mb-4 text-3xl font-bold">{blog_details.blog_title}</h2>:''
        }
         


         {
          (blog_details.blog_subtitle!==null)? <h3  className="mb-4 text-xl font-bold">{blog_details.blog_subtitle}</h3>:''
         }

        

         {(blog_details.blog_image!==null)? <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH+blog_details.blog_image} width={720} height={100} className="mx-auto my-3" alt={"img-tag"}/>:''}
 
{
  (blog_details.blog_description!==null)?<p className="mb-10 text-gray-600">{blog_details.blog_description}</p>:''
}
      
      </div>

    ))}

 

  </article>
</main>
</div>

  </div>

</div>






<Blog/>
    <Testimonials/>
    <Enquiry/>
    
    </>
  )
}

export default BlogView