import React from 'react';
import './Price.css'
import { FaCheck } from "react-icons/fa";
import Button from './Button/Button';
import PriceRow from './PricesRow/PriceRow';
import PricePlanSection from './PricePlanSection';

const pricePlan = [
    {
        id: 1,
        title: 'Email Login',
        icons: <FaCheck />,
        collect: true, 
        engage: true, 
        provider: true
    },
    {
        title: 'Facebook Login',
        icons: <FaCheck />,
        collect: true, 
        engage: true, 
        provider: true
    },
    {
        title: 'Voucher Login',
        icons: <FaCheck />,
        collect: true, 
        engage: true, 
        provider: true
    },
    {
        title: 'Payment Hotspot',
        icons: <FaCheck />,
        collect: false, 
        engage: true, 
        provider: true
    },
    {
        title: '3rd party integration',
        icons: <FaCheck />,
        collect: false, 
        engage: true, 
        provider: true
    },
    {
        title: 'Landing page advertisments',
        icons: <FaCheck />,
        collect: false, 
        engage: true, 
        provider: true
    },
    {
        title: 'Marketing Campaign',
        icons: <FaCheck />,
        collect: false, 
        engage: false, 
        provider: true
    },
    {
        title: 'Client access',
        icons: <FaCheck />,
        collect: false, 
        engage: false, 
        provider: true
    },
]


const Price = () => {
    return (
        <section class="pricing-hed">
            <div class="container">
                <div class="pricing-table">

                    <PriceRow />
                    {
                        pricePlan.map(price => <PricePlanSection price={price} />)
                    }
                    <div class="row buton">
                        <Button />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;