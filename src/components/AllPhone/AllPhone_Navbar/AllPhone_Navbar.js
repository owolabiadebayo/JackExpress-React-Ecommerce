import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './AllPhone_Navbar.css';

// pathWalking = pathRunning , pathAthletics = pathTennis

const Phone_Navbar = ({ title, pathGym, path2 }) => {
  const [phoneBar, setPhoneBar] = useState(false);
  // const showphoneBar = () => setphoneBar(!phoneBar);

  return (
    <>
      <div className="allPhoneNavbar">
        <span className="allPhoneNavbar__section">{title}</span>
        <div className="allPhoneNavbar__category">
          <NavLink activeClassName="allPhoneNavbar__active" to={pathGym} style={{textDecoration: 'none'}} >
            <span className="allphoneNavbar__items">Phones</span>
          </NavLink>
          <NavLink activeClassName="allPhoneNavbar__active" to={path2} style={{textDecoration: 'none'}} >
            <span className="allPhoneNavbar__items">Gadget</span>
          </NavLink>
        </div>
      </div>

      <div className={phoneBar ? 'allPhoneNavbar2 active' : 'allPhoneNavbar2'}>
      <span className="allPhoneNavbar2__section">{title} Phone</span>
        <div className="allPhoneNavbar2__category">
        <NavLink activeClassName="allPhoneNavbar__active" to={pathGym} style={{textDecoration: 'none'}} >
            <span className="allPhoneNavbar__items">Phones</span>
          </NavLink>
          <NavLink activeClassName="allPhoneNavbar__active" to={path2} style={{textDecoration: 'none'}} >
            <span className="allPhoneNavbar__items">Gadget</span>
          </NavLink>
           </div>
      </div>
    </>
  );
}

export default Phone_Navbar;