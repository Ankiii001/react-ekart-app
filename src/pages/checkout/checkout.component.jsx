import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { uuid } from 'uuidv4';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CustomButton from '../../components/custom-button/custom-button.component'


import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
    {
      total?<CustomButton onClick={ () => { if (window.confirm(`Placing order number ${uuid()} placed successfully. `)){
        window.location.href="//localhost:3000/shop";
      } }} isReset >BUY</CustomButton>: null
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);