'use client'
import React, { useEffect,useRef,useState } from "react";
import { useForm } from 'react-hook-form';



export default function Demo(){

  const [success,setSuccess] = useState(false);
  const [danger,setDanger] = useState(false);

    const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();
    const onSubmit = async (data) => {
      try {
        
        const base_url = process.env.NEXT_PUBLIC_API_URL+"demo-form-submit";
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
    return(
        <>
    <div className=" sm:px-20 bg-base-200">
        <div>
          <div className="hero  min-h-screen">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">



            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">

               <h2 className='text-2xl font-semibold ms-7 mt-5 capitalize'>Schedule a free demo</h2> 
  {/* Show success alert if successAlert is true */}
  {success &&     <div className='px-10 my-3'>
        <div className="alert alert-success text-white">Form submitted successfully!</div>
        </div>}

{/* Show error alert if errorAlert is true */}
{danger &&     <div className='px-10 my-3'>
        <div className="alert alert-error text-white">There is technical error!</div>
        </div>}

                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered"
                      {...register("fullname", { required: true })} 
                    />
   
                  </div>
                  {errors.fullnameRequired && <span className='mt-1 text-red-500'>Full Name is required</span>}
                    <div className="flex flex-col sm:flex-row gap-2">
                        <div className="w-full sm:w-1/2">
                        <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email", { required: true,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
                    />
                           {errors.email && <span className='mt-1 text-red-500'>Valid Email is required.</span>}
                  </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                        <div className="form-control">
                    <label className="label">
                      <span className="label-text">Mobile</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Mobile"
                      className="input input-bordered"
                       {...register("mobile", { required: true,pattern: /^[7-9]\d{9}$/i, maxLength: 10 })}
                    />
                    {errors.mobile && <span className='mt-1 text-red-500'>Valid Mobile Number is required.</span>}
                  </div>
                        </div>

                    </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Business Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Business Name"
                      className="input input-bordered"
                      
                      {...register("company", { required: true })} 
                    />
                      {errors.companyRequired && <span className='mt-1 text-red-500'>Company Name is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <textarea
  placeholder="Message Here"
  className="textarea textarea-bordered textarea-sm w-full max-w-md" {...register("message")} ></textarea>

  
                  
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-blue-900 hover:bg-blue-950 text-white" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                  </div>
                </form>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">GET PERSONAL SERVICE AND EXPERT SUPPORT</h1>
                <h1 className="text-6xl font-bold text-blue-900 capitalize">Schedule a free demo</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            
            </div>
          </div>
        </div>
      </div>
        </>
    )
}