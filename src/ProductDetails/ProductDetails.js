import React, { Component } from 'react';
import './ProductDetails.css';
import ProductList from './ProductList';

export default class ProductDetails extends Component {
    render() {
        return (
            <section>
                <div className='container'>
                    <div className='rowss'>
                        <div className='header'>
                            <h2 className='heading'><span>Our</span> Products</h2>
                            <p className='section-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                        </div>
                        <div className='column'>
                            {ProductList.map((e,i) => {
                                return (
                                    <div key={i} className='colss'>

                                        <div className="product-image">
                                            <a href="#"><img src={e.src} alt="" /></a>
                                        </div>
                                        <h3>{e.name}</h3>
                                        <p className="product-price"><span>{e.kg}</span> {e.num} </p>
                                        <a href="#" className="cart-btn"><i class="fa fa-shopping-cart"></i> {e.bttn}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

