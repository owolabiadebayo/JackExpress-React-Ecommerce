import React, { Component } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SlideView.css';
import Slider from 'react-slick';
import Slides from './Slides/Slides';
import Iphone from './Slides/Phone1.jpg';
import Iphone2 from './Slides/Accessories.jpg';
import gadget from './Slides/Gadget.jpg';

const SlideView = () => {
    return (
      <div className="slideView__wrapper">
        <Slider className="slideView__slider"
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
        >

        <div className="slideView__page">
          <Slides 
            image={Iphone}
            alternate="Iphone 12"
            shoes="Iphone12 "
            off={40}
            pathTo="/jask/phone"
          />
        </div>
        <div className="slideView__page">
          <Slides 
            image={Iphone2}
            alternate="Phones Accesories"
            shoes="Phones Accesories"
            off={25}
            pathTo="/jask/phone"
          />
        </div>
        <div className="slideView__page">
          <Slides 
            image={gadget}
            alternate="Electronic Gadget"
            shoes="Playstation 5"
            off={20}
            pathTo="/jask/gadget"
          />
        </div>

        </Slider>
        .
      </div>
    );
}

export default SlideView;