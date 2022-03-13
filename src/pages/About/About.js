import React from 'react';
import './About.css'
import { FaCommentsDollar } from 'react-icons/fa';
import FeatureItems from './FeatureItems/FeatureItems';

const FeatureItem = [
    {
        id: 1,
        title: 'Faster',
        icon: <FaCommentsDollar/>
    },
    {
        id: 2,
        title: 'Cheaper',
        icon: <FaCommentsDollar/>
    },
    {
        id: 3,
        title: 'At hand',
        icon: <FaCommentsDollar/>
    },
]

const About = () => {
    return (
        <div class="container">
            <div class="main">
                <div class="details">
                    <div class="title">About Us</div>
                    <div class="heading">
                        Get Started With <br />
                        Educa Studya.
                    </div>
                </div>
                <div class="btn">
                    <button>View All {'>'}</button>
                </div>
            </div>

            <div class="feature">
                {
                   FeatureItem.map(FeatureItem => <FeatureItems FeatureItem={FeatureItem} key={FeatureItem.id} />) 
                }
            </div>
        </div>
    );
};

export default About;