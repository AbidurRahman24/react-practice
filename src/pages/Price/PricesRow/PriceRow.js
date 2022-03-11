import React from 'react';
import PriceCol from './PriceCol';
import classes from './PriceRow.module.css'
const PriceHeader = [
    {
        title: 'Collect',
        price: 10,
        priceDescription: 'Per Month'
    },
    {
        title: 'Engage',
        price: 25,
        priceDescription: 'Per Month'
    },
    {
        title: 'Provider',
        price: 50,
        priceDescription: 'Per Month'
    }
]

const PriceRow = () => {
    return (
        <div className="row">
            <div className="col title">
                <h3 className={classes.priceTittle}>Pricing plan</h3>
            </div>
            {PriceHeader.map(ph => <PriceCol ph={ph} />)}
        </div>
    );
};

export default PriceRow;