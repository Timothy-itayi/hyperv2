import React from 'react';
import { Carousel } from 'flowbite-react';
import ArrowButton from './ArrowButton'; // Adjust the import path as necessary


const CustomCarousel = ({ imageUrls = [] }) => {
 

  return (
    <div className="relative h-full w-full">
      <Carousel
        leftControl={<ArrowButton direction="left" className="text-2xl text-white" />}
        rightControl={<ArrowButton direction="right" className="text-2xl text-white" />}
        pauseOnHover={true}
      >
        {Array.isArray(imageUrls) &&
          imageUrls.map((imageUrl) => (
            <div key={imageUrl}>
              <img
                className="object-cover w-full h-full"
                src={imageUrl}
                alt={`${imageUrl}`}
              />
            </div>
          ))}
      </Carousel>
      
    </div>
  );
};

export default CustomCarousel;
