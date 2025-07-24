import Link from 'next/link'
import React from 'react'

const Download = ({industry_id,product_id}) => {
  
  return (
    <>
        <div className="flex flex-col items-center my-10">
        <h2 className="text-slate-400 text-md mb-3">Download the use cases in PDF format</h2>
        <Link href={"/resources/how-to-guide"} className="bg-blue-900 text-white px-8 py-3 rounded-md">
            Sample PDF for E-commerce
            </Link>
    </div>
    </>
  )
}

export default Download