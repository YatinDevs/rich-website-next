'use client'
import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';

import { redirect } from 'next/navigation';

const Quote = () => {

const[products,setProducts]= useState([]);

useEffect(() => {
    try {
      const fetchData = async () => {
        const base_url = process.env.NEXT_PUBLIC_API_URL + "products";
        const res = await fetch(base_url);
        const data = await res.json();
     
        setProducts(data.data);
      };

      deleteCookie("otpValidated");
      deleteCookie("userFormSubmitted");
    
      function deleteCookie(name) {
        document.cookie = `${name}=; path='/get-quote'; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
      }


      fetchData();

    } catch (error) {
      throw new Error(error);
    }
  }, []);




    const [success,setSuccess] = useState(false);
    const [danger,setDanger] = useState(false);
  
      const { register, handleSubmit,reset, formState: { isSubmitting,errors } } = useForm();

      const [user,setUser] = useState(0);




      const onSubmit = async (data) => {



        try {
          
          const base_url = process.env.NEXT_PUBLIC_API_URL+"get-quote";
        // const base_url ="http://127.0.0.1:8000/api/get-quote";
          const response = await fetch(base_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(data),
          });
   
        
          const result = await response.json();

          setUser(result.response_id);

 

       
          

  
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

      useEffect(()=>{
      
        if(user!==0){
          document.cookie = "userFormSubmitted=true; path=/get-quote";
            sessionStorage.setItem('response_id', user);
        
            redirect('/get-quote/user-verification'); 
        }
               
            
                  },[user])
  return (
    <>
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get Quote Instanly</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">You can create a free Celebration account in 2 minutes</p>
        </div>

        <div class="relative max-w-md mx-auto mt-8 md:mt-16">
            <div class="overflow-hidden bg-white rounded-md shadow-md">
                <div class="px-4 py-6 sm:px-8 sm:py-7">
                    <form  method="POST"  onSubmit={handleSubmit(onSubmit)}>
                        <div class="space-y-5">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Full Name </label>
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
                                        {...register("fullname", { required: true })} 
                                    />
                                       {errors.fullnameRequired && <span className='mt-1 text-red-500'>Full Name is required</span>}
                                </div>
                            </div>

                            <div>
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
                                        {...register("email", { required: true,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
                                    />
                                     {errors.email && <span className='mt-1 text-red-500'>Valid Email is required.</span>}
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Mobile </label>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.75 3.75a2.25 2.25 0 012.25-2.25h7.5a2.25 2.25 0 012.25 2.25v16.5a2.25 2.25 0 01-2.25 2.25H9a2.25 2.25 0 01-2.25-2.25V3.75zM9 18h6a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v11.25a.75.75 0 00.75.75z" />
</svg>

                                    </div>

                                    <input
                                        type="tel"
                                        name=""
                                        id=""
                                        placeholder="Enter your mobile number"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                        {...register("mobile", { required: true,pattern: /^[7-9]\d{9}$/i, maxLength: 10 })}
                                    />
                                      {errors.mobile && <span className='mt-1 text-red-500'>Valid Mobile Number is required.</span>}
                                </div>
                            </div>

                            <div>
          <label htmlFor="role" className="text-base font-medium text-gray-900">
            Select Product
          </label>
          <select
            id="product"
            name="product"
            {...register("product", { required: true })} 
          
            className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            required
          >
            <option value="" disabled>
              Select Product
            </option>
            {products.map((product,i)=>(<option key={i} value={product.id}>{product.title}</option>))}
            
      
          </select>
        </div>

                            {/* <div class="flex items-center">
                                <input type="checkbox" name="agree" id="agree" class="w-5 h-5 text-green-500 bg-white border-gray-200 rounded" checked />

                                <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                                    I agree to Postcraft’s <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and <a href="#" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                                </label>
                            </div> */}

                            <div>
                                <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>

                            {/* <div class="text-center">
                                <p class="text-base text-gray-600">Already have an account? <a href="#" title="" class="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Go back</a></p>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Quote