'use client'
import Image from "next/image";
import { FaSuitcase } from "react-icons/fa6";
import 'aos/dist/aos.css'; // Import AOS styles
import React,{ useEffect, useState } from 'react';
import AOS from 'aos'
import Breadcrumb from "@/includes/Breadscrumb";
import { useForm } from 'react-hook-form';

const Career = () => {



  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
   
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const[position,setPosition] = useState([]);

useEffect(()=>{
  try {
    const fetchData = async () => {
      const base_url = process.env.NEXT_PUBLIC_API_URL + "positions";
      const res = await fetch(base_url);
      const data = await res.json();
      // console.log(data.data);
      setPosition(data.data);
    };

    fetchData();
  } catch (error) {
    throw new Error(error);
  }
},[])


const[intro,setIntro] = useState([])

useEffect(()=>{
  try {
    const fetchData = async () => {
      const base_url = process.env.NEXT_PUBLIC_API_URL + "careers";
      const res = await fetch(base_url);
      const data = await res.json();
      console.log(data.data);
      // console.log(data.data);
      setIntro(data.data);


    };

    fetchData();
  } catch (error) {
    throw new Error(error);
  }
},[])







  return (
    <>

    <Breadcrumb page={"Career"}/>
    
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-44 flex flex-row items-center mt-10">
        <div className="px-10 sm:px-20 flex flex-col sm:flex-row justify-between items-center gap-10">
          <div>
            <Image src={(intro)?process.env.NEXT_PUBLIC_IMAGE_PATH+intro[0]?.image:"No Title Found"} width={400} height={100}  data-aos="fade-right" data-aos-delay="50" alt={'career'}/>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-3" data-aos="fade-up" data-aos-delay="50">{(intro)?intro[0]?.title:"No Title Found"}</h2>
            <p className="text-justify" data-aos="fade-up" data-aos-delay="100">
            {(intro)?intro[0]?.description:"No Title Found"}
            </p>
          </div>

        </div>
      </div>

      <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-screen  py-20">
        <h2 className="text-4xl text-blue-900 font-bold text-center mb-10" data-aos="fade-up" data-aos-delay="50">Current Opening</h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-around gap-5">
          {position.map((pos,i)=> <Position key={i} position={pos.position} experience={pos.experience} type={pos.type}  location={pos.location} opening={pos.opening} />)}
         
        
        </div>
      </div>

    </>
  )
}

export default Career



export function Position({position,opening,experience,type,location}) {

  const[vacancy,setVacancy] = useState([]);

  useEffect(()=>{
    try {
      const fetchData = async () => {
        const base_url = process.env.NEXT_PUBLIC_API_URL + "positions";
        const res = await fetch(base_url);
        const data = await res.json();
        // console.log(data.data);
        setVacancy(data.data);
      };
  
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  },[])

  return (
    <>
      <div className=" card bg-sky-50 hover:bg-blue-950 hover:text-white w-full max-w-xl shadow-xl" data-aos="fade-up" data-aos-delay="50">

        <div className="card-body">
        <div className="flex flex-row items-center ">
            <FaSuitcase className="text-xl" />
            <h2 className="card-title text-xl ms-5 font-bold">{position}</h2>
          </div>
            <div className="flex flex-col items-center sm:flex-row sm:justify-between mt-2 gap-5">
           
          <div className="flex flex-row items-center gap-10">
            <div className="">
              <h2 className="text-md font-semibold">Experience</h2>
              <p className=" font-semibold hover:text-white">{experience} yr</p>
            </div>
            
            <div className="border-e-2 border-s-2 px-5 border-slate-500">
              <h2 className="text-md font-semibold ">Positions</h2>
              <p className=" font-semibold hover:text-white">{opening}</p>
            </div>
            <div>
              <h2 className="text-md font-semibold">Location</h2>
              <p className=" font-semibold hover:text-white">{location}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_4').showModal()}>Apply Now</button>
          </div>
            </div>
       

        
        </div>

      </div>



<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">


<Resume vacancy={vacancy}/>

 




    <div className="modal-action">





      <form method="dialog">
    
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


    </>
  );
}



export function Resume({vacancy}){

  const [success,setSuccess] = useState(false);
  const [danger,setDanger] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

    const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();
    const [file, setFile] = useState(null);
    const onSubmit = async (data) => {


      const formData = new FormData();
      formData.append("fullname", data.fullname); // Attach the uploaded file
      formData.append("email", data.email); // Attach the uploaded file
      formData.append("mobile", data.mobile); // Attach the uploaded file
      formData.append("apply_for", data.apply_for); 
      formData.append("document", data.document[0]); // Attach the uploaded file







      try {
        
        const base_url = process.env.NEXT_PUBLIC_API_URL+"apply-form-submit";
        // const base_url = `http://127.0.0.1:8000/api/apply-form-submit`;
        const response = await fetch(base_url, {
          method: 'POST',
          headers: {
     
          },
          body:formData,
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
    <div>
<h3 className="font-bold text-lg">Apply Now</h3>
  {/* Show success alert if successAlert is true */}
  {success &&     <div className='px-10 my-3'>
        <div className="alert alert-success text-white">Form submitted successfully!</div>
        </div>}

{/* Show error alert if errorAlert is true */}
{danger &&     <div className='px-10 my-3'>
        <div className="alert alert-error text-white">There is technical error!</div>
        </div>}


<form onSubmit={handleSubmit(onSubmit)}>
  <div className="flex flex-row gap-x-5">
  <div className="form-control">
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Full Name</span>
 
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("fullname", { required: true })}  />
  {errors.fullnameRequired && <span className='mt-1 text-red-500'>Full Name is required</span>}
</label>
</div>

<div className="form-control">
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email</span>
 
  </div>
  <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs"    {...register("email", { required: true,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })} />
  {errors.email && <span className='mt-1 text-red-500'>Valid Email is required.</span>}
</label>
</div>
<div className="form-control">
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Mobile</span>
 
  </div>
  <input type="tel" placeholder="+91" className="input input-bordered w-full max-w-xs"     {...register("mobile", { required: true,pattern: /^[7-9]\d{9}$/i, maxLength: 10 })} />
  {errors.mobile && <span className='mt-1 text-red-500'>Valid Mobile Number is required.</span>}
</label>
</div>

<div className="form-control">
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Apply For</span>
 
  </div>
  <select className="select select-bordered w-full max-w-xs" {...register("apply_for", { required: true })}>
  <option disabled selected value={''}>Select Post</option>
  {vacancy.map((pos,i)=>( <option key={i} value={pos.position}>{pos.position}</option>))}

</select>

</label>
</div>
  </div>

  <div className="flex flex-row items-center gap-x-10">
  <div className="form-control">
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Resume</span>
 
  </div>
  <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" {...register("document", { required: true })}  onChange={handleFileChange} />
  {errors.document && <p>This field is required</p>}

</label>
</div>


<button className="btn ring-1 ring-slate-500 text-black hover:ring-0 hover:text-white hover:bg-slate-700 px-10 mt-10" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
  </div>
 

</form>

<p className="py-4">PDF format will be consider.</p>

</div>
    </>
  );
}
