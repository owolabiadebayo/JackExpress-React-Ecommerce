import React from 'react';
import { Link } from 'react-router-dom';

import './Slides.css';
import Iphone from './Phone1.jpg';
import Iphone2 from './Accessories.jpg';
import gadget from './Gadget.jpg';

import LoyaltyIcon from '@material-ui/icons/Loyalty';

const Slides = ({ image, alternate, shoes, off, pathTo }) => {
  return (
    <>
    <div className="slides__clearance">
      <span className="slides__clearanceSale">Top Sales</span>
      <LoyaltyIcon className="slides__icon" />
    </div>
    <div className="slides">
      <img className="slides__img" src={image} alt={alternate} />
      <div className="slides__right">
        <span className="slides__tag">Exclusive <span className="slides__shoes">{shoes}</span> for <span className="slides__sale">Sale</span></span>
        <div className="slides__saleDiv">
          <span className="slides__upto">Upto</span>
          <span className="slides__off">{off}% <span className="slides__upto">off</span></span>
        </div>
        <Link to={pathTo}>
          <button className="slides__button">Explore More</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Slides;