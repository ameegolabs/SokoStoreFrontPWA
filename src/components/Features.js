import React from 'react';
import '../assets/scss/features.scss';
import { Icon } from 'semantic-ui-react'

class Features extends React.Component {
    render() {
        return (
            <div className='features-container'>
                <div className="features">
                    <div className='features-item features-item-selected'>
                        <div className="features-item-icon features-item-icon-selected">
                            <Icon  name='truck' />
                        </div>
                        <div className="features-item-text features-item-text-selected">
                            <span>Free Delivery</span>
                        </div>
                    </div>
                    <div className='features-item'>
                        <div className="features-item-icon">
                            <Icon name='user' />
                        </div>
                        <div className="features-item-text">
                            <span>Buyer Protection</span>
                        </div>
                    </div>
                    <div className='features-item'>
                        <div className="features-item-icon">
                            <Icon name='clock' />
                        </div>
                        <div className="features-item-text">
                            <span>Customer Support</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;
