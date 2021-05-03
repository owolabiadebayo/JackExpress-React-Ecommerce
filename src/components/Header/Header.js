import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo1 from '../Header/logo1.jpg'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home'
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';

const Header = () => {

  const [navBar, setNavBar] = useState(false);

  const [{ cart, user }] = useStateValue();

  const showNavBar = () => setNavBar(!navBar);

  const onLogin = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <>
      <div className="header">
        <div className="header__menu">
          <MenuIcon onClick={showNavBar} style={{cursor: 'pointer'}} />
        </div>
        <Link style={{textDecoration: 'none'}} to="/">
          <img className="header__logo" src={Logo1}/>
        </Link> 
        <div className="header__nav">
          <Link style={{textDecoration: 'none'}} to="/">
            <span className="header__navItems"><HomeIcon onClick={showNavBar} size={45} style={{cursor: 'pointer'}} />Home</span>
          </Link>
          {/* <Link style={{textDecoration: 'none'}} to="/kids">
            <span className="header__navItems">Kids</span>
          </Link> */}
          <Link style={{textDecoration: 'none'}} to="/jask/allphones">
            <span className="header__navItems">All Categories</span>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/jask/Phone">
            <span className="header__navItems">Phones Accessories</span>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/jask/Gadget">
            <span className="header__navItems">Electronic Gadget</span>
          </Link>
        </div>
        <div className="header__navRight">
          <Link style={{textDecoration: 'none'}} to={!user && "/login"}>
            <div className="header__user" onClick={onLogin} >
              <span className="header__hello">Welcome, <span className="header__mail">{user?.email}</span></span>
              <span className="header__navRightItems">{user ? 'Sign Out' : 'Log In/Sign Up'}</span>
            </div>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/checkout">
            <ShoppingCartRoundedIcon className="header__cart" />
          </Link>
          <span className="header__cartItems">{cart?.length}</span>
        </div>
      </div>

      <div className={navBar ? 'header2 active' : 'header2'}>
            <div className="header2__close">
              <CloseIcon onClick={showNavBar} />
            </div>
            <div className="header2__nav">
              <Link style={{textDecoration: 'none'}} to={!user && "/login"}>
                <div className="header2__user" onClick={onLogin} >
                  <span className="header2__hello">Hello, <span className="header2__mail">{user?.email}</span></span>
                  <span className="header2__navSign">{user ? 'Sign Out' : 'Log In/Sign Up'}</span>
                </div>
              </Link>
              <div className="header2__navItem">
                <Link style={{textDecoration: 'none'}} to="/" onClick={showNavBar} >
                  <span className="header2__navItems">Home</span>
                </Link>
              </div>
              <div className="header2__navItem">
                <Link style={{textDecoration: 'none'}} to="/jask/allphones" onClick={showNavBar} >
                  <span className="header2__navItems">All categories</span>
                </Link>
              </div>
              <div className="header2__navItem">
                <Link style={{textDecoration: 'none'}} to="/jask/phone" onClick={showNavBar} >
                  <span className="header2__navItems">Phones Accesories</span>
                </Link>
              </div>
              <div className="header2__navItem">
              <Link style={{textDecoration: 'none'}} to="/jask/gadget"  onClick={showNavBar}>
                <span className="header2__navItems">Electronic Gadget</span>
            </Link>
              </div>
            </div>
      </div>

    </>
  );
}

export default Header;