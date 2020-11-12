import React from 'react';
import '../assets/scss/seller.scss';
import furniture_img from '../assets/images/royal-wing-chair-in-blue-color-by-dreamzz-furniture-royal-wing-chair-in-blue-color-by-dreamzz-furnit-6hcjya.jpg'
import Layout from "./Layout";

class Seller extends React.Component {
    getItems() {
        const items = [];
        for(let i=1;i<=5;i++) {
            items.push(
                <div className="seller-item">
                    <div className="seller-item-img">
                        <img src={furniture_img} alt=""/>
                    </div>
                    <div className='seller-item-text'>
                        <div className="seller-item-text-primary">
                                <span>
                                    Kids 2Kg Cloth Face Masks
                                </span>
                        </div>
                        <div className="seller-item-text-secondary">
                                <span>
                                    UGX 185,000
                                </span>
                        </div>
                    </div>
                    <div className="seller-item-button">
                        <button>
                            + Add
                        </button>
                    </div>
                </div>
            )
        }
        return items;
    }
    render() {
        return (
            <Layout>
            <div className='seller'>
                <div className='seller-header'>
                    <h4>TOP SELLERS(5)</h4>
                    <span>
                        View All
                    </span>
                </div>
                <div className='seller-items'>
                    {this.getItems()}
                </div>
            </div>
            </Layout>
        );
    }

}
export default Seller
