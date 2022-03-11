import React from 'react';
import classes from './PriceRow.module.css'

const PriceCol = (props) => {
    const { title, price} = props.ph
    return (
        <div className="col">
            <div className="inner">
                <p className={classes.inerTitel}>{title}</p>
                <p className={classes.inerPrice}>${price}</p>
                <p className={classes.inerPera}>Per Month</p>
            </div>
        </div>
    );
};

export default PriceCol;