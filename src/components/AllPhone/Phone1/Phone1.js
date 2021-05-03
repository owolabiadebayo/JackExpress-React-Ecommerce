import React from 'react';
import { Link } from 'react-router-dom';

import './Phone1.css';


const Phone1 = ({ title, image, pathTo }) => {
  return (
    <div className="phone1">
      <span>{title}</span>
      <Link to={pathTo} style={{textDecoration: 'none'}} >
        <img className="phone1image" src={image} alt="" />
        <div className="view">
          <span className="phone1__view">Click here to View All</span>
        </div>
      </Link>
    </div>
  );
}

export default Phone1;