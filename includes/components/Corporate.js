import Image from "next/image"


export default function Corporate({icon,title}){
    return(
        <>
        <div className="flex flex-col items-center justify-center">
        <div className="card w-28 shadow-xl bg-blue-300 p-8 ">
<Image src={process.env.NEXT_PUBLIC_IMAGE_PATH+icon} width={100} height={100} alt={'hospital'}/>

  
</div>
<h2 className="mt-3">{title}</h2>
        </div>
    
        </>
    )
}