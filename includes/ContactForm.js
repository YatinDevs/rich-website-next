
'use client'
import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm(){

  const [success,setSuccess] = useState(false);
  const [danger,setDanger] = useState(false);

    const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();
    const onSubmit = async (data) => {
      try {
        
        const base_url = process.env.NEXT_PUBLIC_API_URL+"form-submit";
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

    

   {/* Show success alert if successAlert is true */}
   {success &&     <div className='px-10 my-3'>
        <div className="alert alert-success text-white">Form submitted successfully!</div>
        </div>}

{/* Show error alert if errorAlert is true */}
{danger &&     <div className='px-10 my-3'>
        <div className="alert alert-error text-white">There is technical error!</div>
        </div>}








              <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-3">
            <div>
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
                     {errors.fullname && <span className='mt-1 text-red-500'>Full Name is required</span>}
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="input input-bordered"
                  {...register("company", { required: true })} 
                />
                   {errors.company && <span className='mt-1 text-red-500'>Company Name is required</span>}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Business Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Business Email"
                  className="input input-bordered"
                  {...register("email", { required: true,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
                />
                   {errors.email && <span className='mt-1 text-red-500'>Valid Email is required.</span>}
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="10 Digit Mobile Number"
                  className="input input-bordered"
                  {...register("mobile", { required: true,pattern: /^[7-9]\d{9}$/i, maxLength: 10 })}
                />
                 {errors.mobile && <span className='mt-1 text-red-500'>Valid Mobile Number is required.</span>}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input
                  type="text"
                  placeholder="Country"
                  className="input input-bordered"
                  {...register("country")}
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="input input-bordered"
                  {...register("city")}
                />
              </div>
            </div>
          </div>

<div className="form-control my-3">
<select className="select select-bordered w-full " defaultValue="default" {...register("product")}>
<option disabled  value='default'>Products</option>
<option value='bulk-sms'>Bulk SMS</option>
<option value='web-dev'>Web Development</option>
<option value='digital-marketing'>Digital Marketing</option>
</select>

</div>
      
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Message Here"
              className="textarea textarea-bordered textarea-sm w-full max-w-md"
              {...register("message")}
            ></textarea>
          </div>

          <div className="form-control">
<label className="label cursor-pointer flex flex-row items-start">

<input type="checkbox" defaultChecked className="checkbox checkbox-primary " {...register("agreement")} />
<span className="label-text ms-3">By clicking this, you agree to disclose your personal information to Rich System Solution for contacting you via mail or text for further assistance.</span>
</label>
</div>

          <div className="form-control mt-6">
            <button type='submit' className="btn bg-blue-900 hover:bg-blue-950 text-white" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
          </div>
        </form>
        </>
    )
}