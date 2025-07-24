import Image from "next/image";

export default function Flex(){
    return (
        <>
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="w-full sm:w-1/2">
<Image src={'/bulk-SMS-1.webp'} width={700} height={100} alt={'flex-banner'}/>
    </div>
    {/* <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div className="text-blue-900 w-full sm:w-1/2">
      <h1 className="text-5xl font-bold mb-5">Box Office News!</h1>
      <h1 className="text-3xl font-bold">Box Office News!</h1>
      <p className="py-6 text-blue-950  text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      {/* <button className="bg-white px-10 text-black rounded-full py-3">Get Started</button> */}
    </div>
  </div>
</div>
        </>
    )
}