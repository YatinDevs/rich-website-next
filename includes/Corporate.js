import Image from "next/image";
import Corpcard from "./Corpcard";

export default function Corporate(){
    return (
        <>
        <div className=" py-10">

        <h2 className="text-center text-5xl font-bold text-blue-900 mb-10">Our Corporate Presence</h2>
    <div className="px-10 sm:px-20 flex flex-col-reverse sm:flex-row sm:justify-between">
        <div className="w-full sm:w-1/2 flex flex-row sm:justify-center sm:items-center  gap-3 sm:flex-wrap overflow-x-scroll sm:overflow-hidden">
         <Corpcard icon="/hospital.png" title="Hospital"/>
         <Corpcard icon="/movie.png" title="Hospital"/>
         <Corpcard icon="/store.png" title="E-commerce"/>
         <Corpcard icon="/travel-luggage.png" title="Travel & Food"/>
         <Corpcard icon="/stethoscope.png" title="Hospital"/>
         <Corpcard icon="/parliament.png" title="Government"/>
         <Corpcard icon="/flask.png" title="Pharmaceutical"/>
         <Corpcard icon="/container.png" title="Hospital"/>
         <Corpcard icon="/hospital.png" title="Hospital"/>
         <Corpcard icon="/hospital.png" title="Hospital"/>
         <Corpcard icon="/hospital.png" title="Hospital"/>
         <Corpcard icon="/buildings.png" title="Real"/>
        </div>
        <div className="hidden sm:w-1/2 sm:flex sm:flex-row sm:justify-center">
            <Image src={'/industry_man.png'} width={700} height={100} alt={'person'}/>
        </div>
     
    </div>
        </div>
        </>
    )
}