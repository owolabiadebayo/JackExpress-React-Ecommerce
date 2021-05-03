import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import "./paystack.css"
import { useStateValue } from '../../StateProvider/StateProvider';
import { getCartTotal } from '../../StateProvider/reducer';

const Paystack1 = () => {
  const publicKey = "pk_your_public_key_here"
  const amount = 1000000
  const [email, setEmail] = useState("")
  const [Address, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [{ cart }, dispatch] = useStateValue();

 amount = getCartTotal(cart)

  const componentProps = {
    email,
    amount,
    metadata: {
      Address,
      phone,
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => {
      setEmail("")
      setName("")
      setPhone("")
    },
    onClose: () => alert("Thank you for trusting us"),
  }

  return (
    <div className="Paystack1">
      <div className="container">
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="product"
          />
          <div className="item-details">
            <p className="item-details__title">Total Item purchaser</p>
            <p className="item-details__amount">NGN {amount}</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Delivery Address</label>
              <input
                type="text"
                id="Address"
                value={Address}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paystack1