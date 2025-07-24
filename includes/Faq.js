export default async function Faq({subpage=0}){
  const result = await getData();
  
    return (
        <>
<div className="py-10  sm:py-10 lg:py-10 flex items-center w-full">

    <div className="px-4  max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" data-aos="fade-up" data-aos-delay="100">Frequently Asked Questions</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay="200">Answers to Common Queries for Better Understanding</p>
        </div>

{result.map((faq,index)=> (subpage.details && faq.product_name ===subpage.details)?

(<div className="collapse collapse-arrow bg-slate-50 shadow-md  mb-5" key={index} data-aos="fade-up" data-aos-delay="400">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">{faq.question}</div>
  <div className="collapse-content">
    <p>{faq.answer}</p>
  </div>
</div>


):(subpage==0 && faq.isVisibleHome)?(<div className="collapse collapse-arrow bg-slate-50 shadow-md mb-5" key={index}>
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">{faq.question}</div>
  <div className="collapse-content">
    <p>{faq.answer}</p>
  </div>
</div>):null

)}





    </div>
  
 



</div>
        </>
    )
}

async function getData () {

  try{
const base_url = process.env.NEXT_PUBLIC_API_URL+"faqs";
    const res = await fetch(base_url)
    const data = await res.json();
  
    // Pass data to the page via props
    return data.data
  }catch(error){
    throw new Error(error);
  }

}