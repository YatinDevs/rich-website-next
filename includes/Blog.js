
import Image from "next/image";
import Link from "next/link";

import { m } from "framer-motion";
import BlogCard from "./components/BlogCard";



// const BlogsInfo = [
//     {
//         id:1,
//         title:'How to mange your remote team?',
//         description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
//         created_at:toString(new Date()),
//         type:'bluk-sms'

//     },
//     {
//         id:2,
//         title:'How to mange your remote team?',
//         description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
//         created_at:toString(new Date()),
//         type:'web-development'

//     },
//     {
//         id:3,
//         title:'How to mange your remote team?',
//         description:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
//         created_at:toString(new Date()),
//         type:'digital marketing'

//     }
// ]






export default async function Blog({img,title}){
const BlogsInfo = await getData();
   
    return (
        <>
<section className=" flex items-center py-10  sm:py-16 lg:py-24">
    <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" data-aos="fade-up" data-aos-delay="100">Insights & Trends</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay="200">Stay updated on the latest trends and expert insights shaping Rich System Solution</p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12" data-aos="fade-up" data-aos-delay="400">
   

      {BlogsInfo.map((info,index)=>(
   
   (info.isVisibleHome)?
                <BlogCard key={index} title={info.blog_heading} id={info.id} description={info.introduction} type={info.blog_cat} created_at={info.created_at} blog_image={info.blog_image} image_alt={info.image_alt}/>:"NO Data Found"
              
      
      ))} 

      
   

      
            

          
       


         
         

        
        </div>
    </div>
</section>


        </>
    )
}






const getData = async()=>{
    try{
        const base_url = process.env.NEXT_PUBLIC_API_URL+"blogs";
            const res = await fetch(base_url)
            const data = await res.json();
          
            // Pass data to the page via props
            return data.data
          }catch(error){
            throw new Error(error);
          }
}










