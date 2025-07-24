'use client'
import React from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";


const BlogCard = ({id,title,created_at,description,type,blog_image,image_alt}) => {
    const router = useRouter()
  return (
    <div className="cursor-pointer shadow-md rounded-lg" onClick={()=>router.push(`/resources/blogs/${id}`)}>
    <div>
        <div  className="block aspect-w-4 aspect-h-3">
            {/* <img className="object-cover w-full h-full" src="" alt="" /> */}
            <Image
                width={1000}
                height={100}
                src={process.env.NEXT_PUBLIC_IMAGE_PATH+blog_image}
                alt={image_alt}
                className="object-cover w-full h-full"
                unoptimized // Disable optimization for debugging
              />
        </div>
        <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> {type} </span>
        <p className="mt-6 text-xl font-semibold px-3">
            <a href="#" title="" className="text-black"> {title}</a>
        </p>
        <p className="mt-4 text-gray-600 px-3">{ 
        description.slice(0, 50)+'....'
        }</p>
        {/* <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div> */}
        {/* <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . {created_at} </span> */}
    </div>
    </div>
  )
}

export default BlogCard