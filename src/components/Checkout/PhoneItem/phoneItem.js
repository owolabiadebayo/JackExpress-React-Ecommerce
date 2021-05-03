import React from 'react';

import './phoneItem.css';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { useStateValue } from '../../StateProvider/StateProvider';




const PhoneItem = ({ id, image, title, before, after, category }) => {
  
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
   
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  }

  return (
    <div className="phoneItem">
      <img src={image} alt="shoe" />
      <div className="phoneItem__right">
        <span className="phoneItem__title">{title}</span>
        <span className="phoneItem__category">{category}</span>
        {/* <div className="shoeItem__price">
          <span className="shoeItem__before">Before: <span className="shoeItem__beforePrice">{before}</span></span>
          <span className="shoeItem__after">After: <span className="shoeItem__afterPrice">{after}</span></span>
        </div> */}
        <span className="phoneItem__price">Price:  <span className="shoeItem__afterPrice"> ${after}</span></span>
        <div className="phoneItem__remove" onClick={removeFromCart} >
          <span className="phoneItem__click">Remove From Cart</span>
          <ShoppingCartRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default PhoneItem;