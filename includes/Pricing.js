import Image from "next/image";
import { FcApproval } from "react-icons/fc";

export default function Price(){
    return(
        <>
      
<div className="px-10 sm:px-20 min-h-screen py-20 ">
<div>
            <h2 className="font-semibold text-4xl text-center mt-10">The Rich Bulk SMS Service And How It Can Benefits You</h2>
            <p className="text-justify sm:text-center mt-3 mb-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
<div className="flex items-center">
<div className="flex flex-col sm:flex-row items-start justify-between gap-x-16">
            <div className="w-full sm:w-1/2">
            <Table/>

            <div className="ps-10 pt-5">
              <p className="text-slate-500">
              *18% GST applicable
              </p>
              <p className="text-slate-500">
              **SMS bundle prices are inclusive of 2.5paisa per SMS DLT scrubbing charges
              Contact Sales for higher bundles
              </p>
            </div>
            </div>
            <div className=" w-full sm:w-1/2 mt-10">
               <div>
                <ul>
                  <li className="flex flex-row items-center mb-5"><FcApproval  className='me-1 sm:me-3 text-sm sm:text-xl'/><a>Lifetime validity for SMS credits</a> </li>
                  <li className="flex flex-row items-center mb-5"><FcApproval  className='me-1 sm:me-3 text-sm sm:text-xl'/><a>Free access to web portal & SMS APIs</a> </li>
                  <li className="flex flex-row items-center mb-5"><FcApproval  className='me-1 sm:me-3 text-sm sm:text-xl'/><a>Free access to web portal & SMS APIs</a> </li> 
                 
                </ul>
               </div>

               <div>
                <p>
                Just pay for SMS. Get access to 50+ free features right out of the box including:
                </p>

                <div className="ps-4 py-5">
                  <ul className="list-disc flex flex-row flex-wrap gap-x-10 gap-y-2">
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                    <li>Send Files via SMS</li>
                  </ul>
                </div>
               </div>

               <div>
                <p>
                Available payment methods:
                </p>

                <div className="ps-4 py-5 flex flex-col gap-y-3">
               <Image src={'/payments-1.png'} width={400} height={100}  alt={'payment'} />
               <Image src={'/wallet-1.png'} width={400} height={100} alt={'payment'}  />
   
                </div>
               </div>




            </div>
        </div>
</div>

       
</div>


        </>
    )
}

export function Table(){
    return(
        <>
    <section className="container px-4 mx-auto">
  

    <div className="flex flex-col mt-6">
        <div className="mx-auto  overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block sm:min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="w-full sm:min-w-full divide-y divide-gray-200 dark:divide-gray-700 shadow-lg">
                        <thead className="bg-sky-500 dark:bg-sky-800 text-white">
                            <tr>
                                <th scope="col" className="py-3.5 px-5 sm:px-14 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-x-3">
                                     
                                        <span className="text-white font-semibold ">SMS Bundle</span>
                                    </div>
                                </th>

                                <th scope="col" className=" py-3.5 text-sm text-white font-semibold text-center rtl:text-right  dark:text-gray-400">
                                   Per Bundle
                                </th>

                                <th scope="col" className=" px-5 sm:px-14 py-3.5 text-sm text-white font-semibold text-center rtl:text-right  dark:text-gray-400">
                                    Per SMS
                                </th>

                          

                           
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                            <td className=" px-5 sm:px-14 py-4 text-center text-sm font-normal text-gray-700 whitespace-nowrap">
                            10 Messages
                                </td>
                            
                                <td className="px-5 sm:px-14 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                    200 KB
                                </td>
                                <td className="px-5 sm:px-14 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                              
                            </tr>

                            <tr>
                            <td className=" px-5 sm:px-14 py-4 text-center text-sm font-normal text-gray-700 whitespace-nowrap">
                            10 Messages
                                </td>
                            
                                <td className="px-5 sm:px-14 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                    200 KB
                                </td>
                                <td className="px-5 sm:px-14 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                              
                            </tr>

                            <tr>
                            <td className=" px-5 sm:px-14 py-4 text-center text-sm font-normal text-gray-700 whitespace-nowrap">
                            10 Messages
                                </td>
                            
                                <td className="px-5 sm:px-14 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                    200 KB
                                </td>
                                <td className="px-5 sm:px-14 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                              
                            </tr>

                            <tr>
                            <td className=" px-5 sm:px-14 py-4 text-center text-sm font-normal text-gray-700 whitespace-nowrap">
                            10 Messages
                                </td>
                            
                                <td className="px-5 sm:px-14 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                    200 KB
                                </td>
                                <td className="px-5 sm:px-14 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                              
                            </tr>

                           

                         

                         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

 
</section>
        </>
    )
}



