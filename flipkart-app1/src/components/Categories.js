import '../assests/css/Categories.css';
import Offer from '../assests/images/offers.png';
import Grocery from '../assests/images/Grocery.png';
import Fashion from '../assests/images/Fashion.png';
import Mobiles from '../assests/images/Mobiles.png';
import Electronics from '../assests/images/Electronics.png';
import Home from '../assests/images/Home.png';
import Appliances from '../assests/images/Appliances.png';
import Travel from '../assests/images/Travel.png';
import Toys from '../assests/images/Toys.png';
import OfferItems from './OfferItems';
import {Route} from 'react-router-dom';
import React from 'react';

function Categories() {
    return (
        <div className="categorySection">
            <div className="categoryItem">
                <a href={OfferItems} className="hover">
                    <img src={Offer} alt=""/>
                    <h6>Top Offers</h6>
                </a>
            </div>
            <div className="categoryItem">
                <a href="#">
                    <img src={Grocery} alt=""/>
                    <h6>Grocery</h6>
                </a>
            </div>
            <div className="categoryItem">
                <a href="#">
                    <img src={Mobiles} alt=""/>
                    <h6>Mobiles</h6>
                </a>
            </div>
            <div className="categoryItem">
                <a href="#">
                    <img src={Fashion} alt=""/>
                    <h6>Fashion</h6>
                </a>
            </div>
            <div className="categoryItem">
                <a href="#">
                    <img src={Electronics} alt=""/>
                    <h6>Electronics</h6>
                </a>
            </div>
            <div className="categoryItem">
                <a href="#">
                    <img src={Home} alt=""/>
                    <h6>Home</h6>
                </a>
            </div>
            <div className="categoryItem">
                <a href="#">
                    <img src={Appliances} alt=""/>
                    <h6>Appliances</h6>
                </a>
            </div>
            <div className="categoryItem">
                <a href="#">
                    <img src={Travel} alt=""/>
                    <h6>Travel</h6>
                </a>
            </div>
            <div className="categoryItem">
                <a href="#">
                    <img src={Toys} alt=""/>
                    <h6>Beauty, Toys & More</h6>
                </a>
            </div>
        </div>
    );
}

export default Categories;