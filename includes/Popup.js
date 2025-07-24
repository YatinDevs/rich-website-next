"use client";
import Image from "next/image";
import React, { useEffect,useRef,useState } from "react";
import { MdClose } from "react-icons/md";
import { useForm } from 'react-hook-form';


export default function Popup() {

// form submit start
const [success,setSuccess] = useState(false);
const [danger,setDanger] = useState(false);

  const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const base_url = process.env.NEXT_PUBLIC_API_URL+"popup-form-submit";
      const response = await fetch(base_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
 

      if(result.status===true){
        setSuccess(true);
        setDanger(false); // Hide error alert if any

        // Hide success alert after 1 minute
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }else{
        setDanger(true); // Hide error alert if any
        setSuccess(false);

        // Hide success alert after 1 minute
        setTimeout(() => {
          setDanger(false);
        }, 2000);
      }

    reset();

    } catch (error) {
      console.error('Error:', error);
    }
  };
// form submit end


  const enquiryFormRef = useRef(null);

    useEffect(()=>{
      const timer = setTimeout(() => {
        if (enquiryFormRef.current) {
          enquiryFormRef.current.showModal();
        }
      }, 1000);
  
      return () => clearTimeout(timer); 
    },[])

  return (
    <>
   

      <dialog id="enquiry_form" className="modal" ref={enquiryFormRef}>
        <div className="modal-box w-11/12 max-w-5xl p-0 relative">
        <div className="modal-action p-0 m-0 absolute right-0 top-0 ">
            <form method="dialog">
              <button className="btn">
              <MdClose />
              </button>
            </form>
          </div>
<div className="flex flex-row items-center  ">
     
    <div className="w-full max-w-2xl bg-blue-950 p-10 ">
        <h2 className="text-3xl font-bold uppercase mb-4  text-white">Get in touch</h2>
   {/* Show success alert if successAlert is true */}
   {success &&     <div className='px-10 my-3'>
        <div className="alert alert-success text-white">Form submitted successfully!</div>
        </div>}

{/* Show error alert if errorAlert is true */}
{danger &&     <div className='px-10 my-3'>
        <div className="alert alert-error text-white">There is technical error!</div>
        </div>}


        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

        <input
  type="text"
  placeholder="Name"
  className="input input-bordered input-info w-full max-w-lg mb-3" {...register("fullname", { required: true })}  />
   {errors.fullnameRequired && <span className='mt-1 text-red-500'>Full Name is required</span>}

<input
  type="email"
  placeholder="Email"
  className="input input-bordered input-info w-full max-w-lg mb-3"  {...register("email", { required: true,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })} />
  {errors.email && <span className='mt-1 text-red-500'>Valid Email is required.</span>}
<input
  type="tel"
  placeholder="Mobile"
  className="input input-bordered input-info w-full max-w-lg mb-3"    {...register("mobile", { required: true,pattern: /^[7-9]\d{9}$/i, maxLength: 10 })} />
{errors.mobile && <span className='mt-1 text-red-500'>Valid Mobile Number is required.</span>}
<textarea
  placeholder="Message"
  className="textarea textarea-info textarea-bordered textarea-md w-full max-w-lg mb-3"   {...register("message")}></textarea>

<button className="bg-orange-500 hover:bg-orange-700 text-white px-10 py-3 rounded-md w-full max-w-lg" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
        </form>
    </div>

    <div className="w-full max-w-2xl">
     <Image src={'/customer-support-illustration.png'} width={1000} height={500} alt={'Enquiry'}/>
    </div>
</div>



        
        </div>
      </dialog>
    </>
  );
}
