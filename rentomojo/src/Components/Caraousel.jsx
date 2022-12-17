import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.module.css"
import React from 'react'
import { border, Box } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";
const ImageSlider = () => {
    const images = [{
        id: 1,
        src: "https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg",
        alt: "Image 1"
    },
    {
        id: 2,
        src: "https://s.rmjo.in/AC-Offer-Banner-Web-.jpg",
        alt: "Image 2 "
    },
    {
        id: 3,
        src: "https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg",
        alt: "Image 3"
    },
    {
        id: 4,
        src: "https://s.rmjo.in/WP-Web.png",
        alt: "Image 4"
    }
    ];
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 3000,
   
  };
  return (
    <>

      <div className="imgslider" style={{width:"80%" ,align:"center" ,margin:"auto", }}>
        <Box  mt="2">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img style={{borderRadius:"20px"}} src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
        </Box>
      </div>
          </>
  )
}
export default ImageSlider;