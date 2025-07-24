'use client'

import Otp from "@/includes/components/Otp";
import { redirect } from "next/navigation";
import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';








const Verification = () => {




const [user,setUser]= useState(0);
  useEffect(()=>{
if(sessionStorage.getItem('response_id')){
  const value = sessionStorage.getItem('response_id');
  setUser(value);
}else{
  redirect('/');
}
   
 
    
 
  
  },[])

  return (
    <>{  (user?(   <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">OTP Verification</h2>
              <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">You can create a free Celebration account in 2 minutes</p>
          </div>
  
          <div class="relative max-w-md mx-auto mt-8 md:mt-16">
              <div class="overflow-hidden bg-white rounded-md shadow-md">
           <Otp user={user}/>
              </div>
          </div>
      </div>
  </section>):'')}
  
 

    </>
  )
}

export default Verification