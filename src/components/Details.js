import React from 'react';
import '../assets/scss/details.scss';
import {Button, Icon} from "semantic-ui-react";
import Layout from "./Layout";

class Details extends React.Component {
    render() {
        return (
            <Layout>
            <div className='details-container'>
                <div className="details-header">
                    <span>
                        STORE DETAILS
                    </span>
                </div>
                <div className='details-target-container'>
                    <h3>
                        Target
                    </h3>
                    <h4>
                        Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
                    </h4>
                </div>
                <div className="details-target-buttons">
                    <Button color={'green'}>
                        <Icon>
                            <Icon size='large' name='whatsapp' />
                        </Icon>
                        <span>
                            Chat with us
                        </span>
                    </Button>
                    <Button color={'black'} style={{borderRadius: '25px'}} className='details-target-buttons-black'>
                        <Icon>
                            <Icon size='large' name='th large' />
                        </Icon>
                        <span>
                            Categories
                        </span>
                    </Button>
                </div>
            </div>
            </Layout>
        );
    }

}
export default Details;
