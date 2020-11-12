import React from 'react';
import { Search,Icon, Input} from 'semantic-ui-react';
import '../assets/scss/header.scss';
import Layout from "./Layout";

class Header extends React.Component {
    render() {
        return (
            <Layout>
            <div className="header">
                <div className='header-box'>
                    <div className='header-box-icon'>
                        <Icon size='large' name ='archive' />
                    </div>
                    <div className='header-box-text'>
                        <div className='header-box-text-primary'><span>Target</span></div>
                        <div className='header-box-text-secondary'><span>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</span></div>
                    </div>
                </div>
                <div className='header-searchbox'>
                    <div className='header-searchbox-text'>
                        <Input icon='search' placeholder='Search for products' />
                    </div>
                </div>
            </div>
            </Layout>
        );
    }

}
export default Header;
