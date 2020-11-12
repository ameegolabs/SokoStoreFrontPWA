import React from 'react';
import furniture_img from '../assets/images/chair.jpeg'
import mask_img from '../assets/images/black-unisex-face-mask-pack-of-2-fm02-10.jpg';
import grocery_img from '../assets/images/nrd-D6Tu_L3chLE-unsplash.jpg';
import "../assets/scss/categories.scss";
import { Card} from "semantic-ui-react";
import Layout from "./Layout";


class Categories extends React.Component {
    render() {
        return (
            <Layout>
            <div className='categories-container'>
                <h1>TOP CATEGORIES</h1>
                <div className='categories-items'>
                    <div className="categories-item">
                        <div className="categories-item-img">
                            <img src={furniture_img} alt=""/>
                        </div>
                        <div className="categories-item-text">
                            Furniture
                        </div>
                    </div>
                    <div className="categories-item">
                        <div className="categories-item-img">
                            <img src={furniture_img} alt=""/>
                        </div>
                        <div className="categories-item-text">
                            Grocery
                        </div>
                    </div>
                    <div className="categories-item">
                        <div className="categories-item-img">
                            <img src={furniture_img} alt=""/>
                        </div>
                        <div className="categories-item-text">
                            Masks
                        </div>
                    </div>
                </div>
                <div className='category-slider'>
                    <div className="category-slider-circle category-slider-circle-selected"></div>
                    <div className="category-slider-circle"></div>
                    <div className="category-slider-circle"></div>
                    <div className="category-slider-circle"></div>
                </div>
            </div>
            </Layout>
        );
    }

}
export default Categories;
