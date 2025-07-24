
'use client'
import Blogs from '@/includes/Blog'
import Enquiry from '@/includes/Enquiry'
import Testimonials from '@/includes/Testimonials'
import React,{useState,useEffect} from 'react'

const Faq = () => {

  const[types,setTypes]=useState([]);
  useEffect(()=>{
    try {
      const fetchData = async () => {
        const base_url = process.env.NEXT_PUBLIC_API_URL + "products";
        const res = await fetch(base_url);
        const data = await res.json();
        // console.log(data.data);
        setTypes(data.data);
      };

      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  },[])


  const[questions,setQuestions]=useState([]);
   
  useEffect(()=>{
    try {
      const fetchData = async () => {
        const base_url = process.env.NEXT_PUBLIC_API_URL + "faqs";
        const res = await fetch(base_url);
        const data = await res.json();
        // console.log(data.data);
        setQuestions(data.data);
      };

      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  },[])

const[faqs,setFaqs]= useState(1);
  const handleClick = (id) =>{
    setFaqs(id);
  }



  return (
    <>
    <div className='px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl   '>

      <div className='flex flex-row items-start px-20 gap-x-5'>
<div className='w-3/5'>
<div className="mt-3">
    <h2 className="text-4xl font-bold text-center my-10">Frequently Asked Questions</h2>

    {questions.map((que,i)=> que.product_id ==faqs?
      
      (<div key={i} className="collapse collapse-arrow bg-slate-50 shadow-md  mb-5">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">{que.question}</div>
  <div className="collapse-content">
    <p>{que.answer}</p>
  </div>
</div>):null)}


    </div>
  
</div>

<div className='w-2/5 flex flex-col gap-y-3 '>
<div>
<h2 className="text-4xl font-bold text-center my-10 ">Related FAQ</h2>
</div>

<div className='max-h-96 overflow-auto px-10'>
{types.map((items,i)=>(

<Types key={i} title={items.title} onClick={() => handleClick(items.id)}/>
))}
</div>


    
      
</div>

      </div>
 
    </div>
    <Blogs/>
    <Testimonials/>
    <Enquiry/>
    </>
  )
}

export default Faq


export function Types({title,onClick}){



  return(
    <>



<div onClick={onClick} className="card bg-sky-100 hover:bg-blue-950 hover:text-white  shadow-md hover:shadow-sm cursor-pointer mb-3">
    <div className="card-body">
      <h2 className=" text-md font-semibold">{title}</h2>
    </div>
</div>
    </>
  )
}