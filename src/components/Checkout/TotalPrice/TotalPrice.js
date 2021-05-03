import React from 'react';

import './TotalPrice.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider/StateProvider';
import { getCartTotal } from '../../StateProvider/reducer';
import{Link} from 'react-router-dom'


const TotalPrice = () => {

  const [{ cart }, dispatch] = useStateValue();

 

  return (
    <div className="totalPrice">
      <CurrencyFormat 

        renderText={(value) => (
          <>
            <span className="totalPrice__items">Total number of Items in your cart: <strong>{cart?.length}</strong></span>
            <span className="totalPrice__total">Total Price of your items: <strong>{`${value}`}</strong></span>
          </>
        )}

        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"#"}
      />
      {/* <button>Proceed to Payment</button> */}
      <div className="totalPrice__button">
      <Link style={{textDecoration: 'none'}} to="/jask/payment">
            <button>Proced to payment</button>
          </Link>
        
      </div>
    </div>
  );
}

export default TotalPrice;