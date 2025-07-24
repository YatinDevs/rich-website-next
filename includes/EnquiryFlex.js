import Image from "next/image";
import Link from "next/link";

export default function EnquiryFlex(){
    return(
        <>
    <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-10 " data-aos="fade-up" data-aos-delay="100">
    <div className=" shadow-xl  text-white " >
  <div className="card flex flex-col sm:flex-row justify-center sm:items-center p-5 sm:p-0  " style={{"background":"#004ECC"}}>
    <div className="w-full sm:w-1/3 ">
        <Image src={'/lets_reach_out.png'} width={100} height={100} alt={'offer'} className="object-cover w-full" />
    </div>
    <div className="w-full sm:w-3/5">
    <h2 className="card-title text-3xl font-bold mb-5">
    LETS REACH OUT</h2>
    <h3 className="font-semibold mb-3">Connect with us</h3>
    <p className="text-justify pe-3">
    Empower your business with cutting-edge conversational experiences through our robust infrastructure, designed to support you at any scale. With contextual campaigns, customizable workflows, and seamless cross-channel interactions, we help you engage your customers in meaningful and innovative ways. Whether it’s personalizing customer journeys, streamlining communication processes, or creating impactful marketing campaigns, our solution ensures that your enterprise is equipped to deliver outstanding, scalable, and efficient customer experiences.</p>

    <div className="mt-5 flex">
        <Link href={"/schedule-a-demo"} className="bg-white text-sky-600 px-3 sm:px-10 py-2 rounded-full me-2 sm:me-5 hover:bg-slate-200 capitalize ">Schedule a demo</Link>
        <Link href={'/contact'} className="bg-white text-sky-600 px-3 sm:px-10 py-2 rounded-full  hover:bg-slate-200 capitalize">Talk  to Sales</Link>
    </div>

    {/* <div className="flex flex-row item-center">
    <button className="my-3  bg-slate-50 text-slate-600 rounded-full hover:bg-slate-100 px-10 py-3 ">Get Started</button>
    </div> */}
 
    </div>
  
  </div>
</div>
    </div>
        </>
    )
}