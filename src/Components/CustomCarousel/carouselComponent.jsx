// import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carouselImage from "../../assets/carouselImage.avif";
const CustomCarouselSlider = () => {
  return (
    <Carousel 
        showThumbs={false} 
        infiniteLoop={true} 
        showStatus={false}
        autoPlay={true}    
        
    >
      <div>
        <img src={carouselImage} alt="Slide 1" height={400} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={carouselImage} alt="Slide 1" height={400} />

        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={carouselImage} alt="Slide 1" height={400} />

        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default CustomCarouselSlider;
