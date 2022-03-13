import React from 'react';
import classes from './FeatureItems.module.css'
const FeatureItems = (props) => {
   const {title, icon} = props.FeatureItem
    return (
        <div class={classes.feature__item}>
        <div class={classes.feature__item__icon}>
            <span className='i' >{icon}</span>
        </div>
        <div class={classes.feature__item__title}>{title}</div>
    </div>
    );
};

export default FeatureItems;