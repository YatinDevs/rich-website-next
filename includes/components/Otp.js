'use client'
import React,{useEffect,useState} from 'react'
import { useForm } from 'react-hook-form';


import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { redirect } from 'next/navigation';


const Otp = ({user}) => {

    const [success,setSuccess] = useState(false);
    useEffect(()=>{
if(success){

    document.cookie = 'otpValidated=true; path=/get-quote';
    function deleteCookie(name) {
      document.cookie = `${name}=; path='/get-quote'; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    }
    deleteCookie("userFormSubmitted");

    redirect('/get-quote/user-verification/downloadPdf');
}
    },[success])
 
  // const[download,setDownload]= useState('');

    const [value, setValue] = useState("");
    const [danger,setDanger] = useState(false);
//   console.log(value);
    const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();
      const onSubmit = async (data) => {
      
 
        try {
          
          const base_url = process.env.NEXT_PUBLIC_API_URL+"verification";
        // const base_url ="http://127.0.0.1:8000/api/verification";
          const response = await fetch(base_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({user:user,otp:value}),
          });
    
          const result = await response.json();
     
 
          
       // Handle the Laravel backend response
  
          if(result.status===true){
        setSuccess(true);
  
    //    redirect('/get-quote/user-verification/downloadPdf');
     
          }
  
        reset();
  
        } catch (error) {
          console.error('Error:', error);
        }
      };
  return (
 <>
    <div class="px-4 py-6 sm:px-8 sm:py-7">
                    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div class="space-y-5 flex flex-col items-center justify-center">
                        <label for="" class="text-base font-medium text-gray-900"> Enter OTP </label>
                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}  onChange={(value) => setValue(value)}   >
      <InputOTPGroup>
        <InputOTPSlot index={0}          />
      
        <InputOTPSlot index={1}  />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    {/* {errors.otpRequired  && <span className='mt-1 text-red-500'>OTP Invalid</span>} */}

                            {/* <div>
                                <label for="" class="text-base font-medium text-gray-900"> First & Last name </label>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>

                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Enter your full name"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div> */}

                            {/* <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>

                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email to get started"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div> */}

                            {/* <div>
                                <label for="" class="text-base font-medium text-gray-900"> Password </label>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                            />
                                        </svg>
                                    </div>

                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Enter your password"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div> */}
{/* 
                            <div class="flex items-center">
                                <input type="checkbox" name="agree" id="agree" class="w-5 h-5 text-green-500 bg-white border-gray-200 rounded" checked />

                                <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                                    I agree to Postcraft’s <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                                </label>
                            </div> */}

                          
                                <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                          

                            {/* <div class="text-center">
                                <p class="text-base text-gray-600">Already have an account? <a href="#" title="" class="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Login here</a></p>
                            </div> */}
                        </div>
                    </form>
                </div>
 </>
  )
}

export default Otp