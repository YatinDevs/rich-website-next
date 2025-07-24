"use client";
import Image from "next/image";
import { React, useState, useEffect } from "react";
export default function Counter() {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const base_url = process.env.NEXT_PUBLIC_API_URL+'facts';
        const res = await fetch(base_url);
        const data = await res.json();
        setFacts(data.data);
      };

      if(sessionStorage.getItem('response_id')){
        deleteCookie("otpValidated");
        deleteCookie("userFormSubmitted");
      
        function deleteCookie(name) {
          document.cookie = `${name}=; path='/get-quote'; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        }
        sessionStorage.removeItem('response_id');
    
    
      }

      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <>
<div className="py-20" style={{"background":"#004ECC"}}>
<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
<div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl text-white" data-aos="fade-up" data-aos-delay="100">Facts & Figures</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed  text-white" data-aos="fade-up" data-aos-delay="200">Understand the Powerful Insights and Metrics That Demonstrate Our Success and Future Potential</p>
        </div>
        <div className="px-20  flex flex-col sm:flex-row justify-between items-center " data-aos="fade-up" data-aos-delay="400">
          {facts.map((fact, index) => (
            <div
              className="flex flex-row justify-center items-center  sm:mb-0"
              key={index}
            >
              <CounterSection icon={`https://richadmin.demovoting.com/storage/${fact.icon}`} title={fact.title} subtitle={fact.subtitle} digit={fact.number}/>
            
            </div>
          ))}
        </div>
      </div>
</div>
    
    </>
  );
}



export function CounterSection({icon,digit,title,subtitle}){

    const [count, setCount] = useState(0);

    useEffect(() => {
    if (count < digit) {
      const Client_interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 50); // Increment every 1 second

      // Cleanup interval on component unmount or count update
      return () => clearInterval(Client_interval);
    }
  }, [count]);


return(
  <>
    <div className="flex flex-col items-center mt-10">
                {/* <GoTrophy className="text-6xl text-white text-center"/> */}
                <Image src={icon} width={70} height={70} alt={'rich-fact'} style={{"filter":"invert(100%)","objectFit": 'cover',"width": "100", "height": "100"}}  priority={true} />
                <h2 className="text-3xl  mt-10 text-white font-semibold text-center">
          
                 
                  {count} {title}
                </h2>
                <p className="text-white text-center">{subtitle}</p>
              </div>
  
  </>
)
}
