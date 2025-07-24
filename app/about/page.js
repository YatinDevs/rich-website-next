import Breadcrumb from "@/includes/Breadscrumb";
import Counter from "@/includes/Counter";
import Enquiry from "@/includes/Enquiry";
import EnquiryFlex from "@/includes/EnquiryFlex";
import Testimonials from "@/includes/Testimonials";
import AOSInitializer from "@/includes/components/AOSInitializer";
import Image from "next/image";


const fetchAboutData = async () => {
  try {
    const base_url = process.env.NEXT_PUBLIC_API_URL+"abouts";
    const res = await fetch(base_url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const About = async () => {
  const result = await fetchAboutData();

  const api_img = process.env.NEXT_PUBLIC_IMAGE_PATH;

  return (
    <>
    <AOSInitializer />
      <Breadcrumb page="About" />
 
      {result.map((abt_data, index) => (
        <AboutHero
          type={abt_data.type}
          key={index}
          img={`${api_img}${abt_data.img}`}
          title={abt_data.title}
          subtitle={abt_data.subtitle}
          description={abt_data.description}
      
        />
      ))}

      {result.map((abt_data, index) => (
        <AboutUs
          type={abt_data.type}
          key={index}
          img={`${api_img}${abt_data.img}`}
          title={abt_data.title}
          subtitle={abt_data.subtitle}
          description={abt_data.description}
        />
      ))}

      <Counter />

      {result.map((abt_data, index) => (
        <Vision
          type={abt_data.type}
          key={index}
          img={`${api_img}${abt_data.img}`}
          title={abt_data.title}
          subtitle={abt_data.subtitle}
          description={abt_data.description}
        />
      ))}

      {result.map((abt_data, index) => (
        <Mission
          type={abt_data.type}
          key={index}
          img={`${api_img}${abt_data.img}`}
          title={abt_data.title}
          subtitle={abt_data.subtitle}
          description={abt_data.description}
        />
      ))}

      {result.map((abt_data, index) => (
        <What
          type={abt_data.type}
          key={index}
          img={`${api_img}${abt_data.img}`}
          title={abt_data.title}
          subtitle={abt_data.subtitle}
          description={abt_data.description}
        />
      ))}

      <Testimonials />

      <Enquiry />
      <EnquiryFlex/>
    </>
  );
};

export default About;

export function Mission({ type, title, subtitle, img, description }) {
  return (
    <>
      {type === "Mission" ? (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-96 flex   items-center py-10 sm:py-0">
          <div className="flex flex-col items-center sm:flex-row-reverse sm:justify-between">
            <div className="w-full sm:w-1/2 flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-blue-900 text-6xl font-semibold mb-2">
                {title}
              </h2>

              <p className="text-justify">{description}</p>
            </div>
            <div className="w-full sm:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <div className="flex justify-center">
                <Image src={img} width={450} height={100} alt={"mission"} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export function Vision({ type, title, subtitle, img, description }) {
  return (
    <>
      {type === "Vision" ? (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-96 flex flex-row-reverse items-center py-10 ">
          <div className="flex flex-col  sm:flex-row justify-between items-center gap-20">
            <div className="sm:w-3/5" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-blue-900 text-6xl text-center font-semibold mb-2">
                {title}
              </h2>

              <p className="text-justify">{description}</p>
            </div>
            <div className="sm:w-2/5" data-aos="fade-up" data-aos-delay="100">
              <div className="">
                <Image src={img} width={450} height={100} alt={"vision"} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export function AboutHero({ type, title, subtitle, img, description }) {


  return (
    <>
      {type === "Introduction" ? (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-96 flex flex-row items-center pb-24 pt-5">
          <div className="flex flex-col-reverse justify-between">
            <div className="flex flex-col sm:items-center items-start" data-aos="fade-up" data-aos-delay="100"  >
              <h2 className="w-full text-blue-900  text-center text-6xl font-semibold mb-3">
                {title}
              </h2>
              <h2 className="text-xl sm:text-2xl text-slate-500 mb-3">{subtitle}</h2>
              <p className="text-justify">{description}</p>
            </div>
            <div className="">
              <div className="flex justify-center" data-aos="fade-up" data-aos-delay="100">
                <Image src={img} width={1000} height={100} alt={"abt-hero"} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export function What({ type, title, subtitle, img, description }) {
  return (
    <>
     
      {type === "Offer" ? (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-96 flex flex-row items-center ">
            
          <div className="sm:flex sm:flex-row-reverse justify-between items-center">
            <div className="w-full sm:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-blue-900  text-4xl sm:text-6xl font-semibold mb-2">
                {title}
              </h2>
              <h2 className="text-2xl text-slate-900 mb-3">{subtitle}</h2>
              <p className="text-justify">{description}</p>
            </div>
            <div className="w-full sm:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <div className="">
                <Image src={img} width={500} height={100} alt={"what-we-do"}      />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export function AboutUs({ type, title, subtitle, img, description }) {
  return (
    <>
      {type === "About" ? (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full min-h-96 flex flex-row items-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
            <div className="sm:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-blue-900 text-6xl font-semibold mb-2">
                {title}
              </h2>
              <h2 className="text-2xl text-slate-900 mb-3">{subtitle}</h2>
              <p className="text-justify">{description}</p>
            </div>
            <div className="sm:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-row justify-end">
                <Image src={img} width={450} height={100} alt={"about"} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
