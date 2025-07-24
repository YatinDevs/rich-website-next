'use client'
import { redirect } from 'next/navigation';
import React,{useEffect} from 'react'

const Downloadpage = () => {

  

useEffect(()=>{

  if(sessionStorage.getItem('response_id')){
    const link = document.createElement('a');
    link.href = '/sample.pdf';
    link.download = 'document.pdf';  // Optional: specify filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      deleteCookie("otpValidated");
    deleteCookie("userFormSubmitted");
  
    function deleteCookie(name) {
      document.cookie = `${name}=; path='/get-quote'; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    }
    sessionStorage.removeItem('response_id');
    redirect('/')
    }, 60000);
  
  }else{
    redirect('/')
  }
 
  //

 


},[])
  return (
    <>
    <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-10 w-full min-h-screen'>
    <div role="alert" className="alert shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="stroke-info h-6 w-6 shrink-0">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 className="font-bold">Thank You for download quotation</h3>

    <div className="text-xs">Your donwloading automatically start...</div>
  </div>
  <a>Go Home</a>
  {/* <button className="btn btn-sm">Donwload</button> */}
</div>
    </div>

    </>
  )
}

export default Downloadpage