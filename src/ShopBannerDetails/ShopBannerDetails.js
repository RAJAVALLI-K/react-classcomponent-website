import React, { Component } from 'react';
import './ShopBannerDetails.css';

export default class ShopBannerDetails extends Component {
  render() {
    return (
      <section className='shop-banner'>
        <div className='container'>
          <div className='row-con'>
            <h3 className='head'>December sale is on! <br /> with big <span>Discount...</span></h3>
            <div class="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
            <a href="#" class="cart-btn">Shop Now</a>
          </div>
        </div>
      </section>
    )
  }
}
