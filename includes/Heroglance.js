
import React from 'react'



const Heroglance = () => {
  return (
    <>

   <div style={{ overflow: 'hidden', width: '100%', height: '100%' }} data-aos="fade-up" data-aos-delay="300">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="global.mp4" type="video/mp4" />
        {/* Add fallback for unsupported formats */}
        Your browser does not support the video tag.
      </video>
    </div>
 
     

    </>
  )
}

export default Heroglance




