import React from 'react';
import '../assets/scss/navbar.scss';
import { Icon } from 'semantic-ui-react'

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar-container'>
                <div className="navbar">
                    <div className='navbar-item navbar-item-selected'>
                        <div className="navbar-item-icon navbar-item-icon-selected">
                            <Icon name='home' />
                        </div>
                        <div className="navbar-item-text navbar-item-text-selected">
                            <span>Home</span>
                        </div>
                    </div>
                    <div className='navbar-item'>
                        <div className="navbar-item-icon">
                            <Icon name='th large' />
                        </div>
                        <div className="navbar-item-text">
                            <span>Categories</span>
                        </div>
                    </div>
                    <div className='navbar-item'>
                        <div className="navbar-item-icon">
                            <Icon name='shopping bag' />
                        </div>
                        <div className="navbar-item-text">
                            <span>Bag</span>
                        </div>
                    </div>
                    <div className='navbar-item'>
                        <div className="navbar-item-icon">
                            <Icon name='clipboard list'/>
                        </div>
                        <div className="navbar-item-text">
                            <span>Orders</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
