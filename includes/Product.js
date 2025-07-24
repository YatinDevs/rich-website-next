import Link from 'next/link'
import React from 'react'

const Product = ({title,img,description,product_name}) => {
  let redirect_url = `products/${product_name}`;
  let img_url = process.env.NEXT_PUBLIC_IMAGE_PATH+img;
  return (
   
<div className="group shadow-2xl rounded-lg  px-4 hover:border hover:border-blue-600 cursor-pointer my-2 py-5 " style={{"height":"450px"}}>
  <img src={img_url} />
  <h2 className='my-3 text-lg'>{title}</h2>
  <p className=" text-justify hover:text-black mb-10 text-sm/[18px]">{description.slice(0, 100) + '...'}</p>
  <Link href={redirect_url} className='text-slate-500 group-hover:text-blue-700 cursor-pointer'>
    View More
  </Link>
</div>
  )
}

export default Product