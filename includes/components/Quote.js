import Link from "next/link"


const Quote = () => {


  return (
    <>
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <svg class="mx-auto w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get Quote Instantly</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Form submission made easy – get your quote right away!</p>
        </div>

        <div class="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-12">
    

            <Link href={'/get-quote'}  title="" class="inline-flex items-center justify-center px-4 py-4 text-black transition-all duration-200 border-2 border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white" role="button" >
                {/* <svg class="w-6 h-6 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m3 5.557 7.357-1.002.004 7.097-7.354.042L3 5.557zm7.354 6.913.006 7.103-7.354-1.011v-6.14l7.348.048zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.378-.014-7.161 9.772.016z"></path>
                </svg> */}
                Get Quote
            </Link>

        </div>

        <p class="mt-6 text-base text-center text-gray-600" >Download Your Quote</p>
    </div>
</section>




    </>
  )
}

export default Quote