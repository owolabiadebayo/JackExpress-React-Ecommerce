import React from 'react';

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import './phoneComponent.css';
import { useStateValue } from '../../StateProvider/StateProvider';





const PhoneComponent = ({ image, id, title, before, after, category }) => {

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        image: image,
        title: title,
        before: before,
        after: after,
        category: category,
      },
    })
  };
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="phoneComponent">
      <img src={image} alt="phones&accesories" />
      <div className="phoneComponent__name1 phoneComponent__name2 phoneComponent__name3">
        <span>{title}</span>
      </div>
      <div className="phoneComponent__price">
        <span className="phoneComponent__before">Before: <span className="phoneComponent__beforePrice">${before}</span></span>
        <span className="phoneComponent__after">Now: <span className="phoneComponent__afterPrice">${after}</span></span>
      </div>
      <span className="phoneComponent__category">{category}</span>
      <div className="phoneComponent__add" onClick={addToCart} >
        <div className="oneMore">
          <span>Add To Cart</span>
          <ShoppingCartRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default PhoneComponent;