'use client'
import React,{useEffect,useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Product from "./Product";


const Products = () => {

    const [explore, setExplore] = useState([]);
    useEffect(() => {
        try {
          const fetchData = async () => {
            const base_url = process.env.NEXT_PUBLIC_API_URL + "explores";
            const res = await fetch(base_url);
            const data = await res.json();
        
            setExplore(data.data);
          };
    
          fetchData();

          
          function deleteCookie(name) {
            document.cookie = `${name}=; path='/get-quote'; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
          }
          deleteCookie("userFormSubmitted");
          deleteCookie("otpValidated");
      
    
    
        } catch (error) {
          throw new Error(error);
        }
      }, []);


   
  return (
    <>
 
      <div className="w-full px-8  " data-aos="fade-up" data-aos-delay="400">
   
    
      <Swiper
       spaceBetween={20} // Space between slides
       slidesPerView={5} // Number of slides visible at a time
       loop={true} // Loop the slides
       effect={'cards'}
       pagination={{ clickable: true }} // Pagination controls
       navigation={false} // Navigation arrows
       disableOnInteraction={true}
       pauseOnMouseEnter={false}
       reverseDirection={false}
       stopOnLastSlide={false}
       waitForTransition={true}
       delay={3000}
       autoplay={true}
       breakpoints={{
        // When window width is >= 1200px (Large screens)
        1200: {
          slidesPerView: 5, // Show 5 slides
          spaceBetween: 20, // Space between slides
        },
        // When window width is >= 992px and < 1200px (Medium screens)
        992: {
          slidesPerView: 4, // Show 4 slides
          spaceBetween: 20, // Space between slides
        },
        // When window width is >= 768px and < 992px (Tablet screens)
        768: {
          slidesPerView: 3, // Show 3 slides
          spaceBetween: 15, // Space between slides
        },
        // When window width is >= 480px and < 768px (Mobile tablets)
        480: {
          slidesPerView: 2, // Show 2 slides
          spaceBetween: 10, // Space between slides
        },
        // When window width is < 480px (Small mobile screens)
        0: {
          slidesPerView: 1, // Show 1 slide
          spaceBetween: 5, // Space between slides
        },
      }}
       style={{ width: '100%', height: '100%' }}
       
      >


{explore.map((product,idx)=>
  <SwiperSlide key={idx}>
  <Product title={product.title} img={product.image} description={product.description} product_name={product.product_name}/>
</SwiperSlide>
)}
      


    


    

      




  


        {/* Add more slides as needed */}
      </Swiper>


      </div>
    </>
  );
};

export default Products;
