import React from 'react';
import classes from './Card.module.css'
const Card = (props) => {
   const {title,icon,Desc} = props.cardItem;
    return (
        <div className={classes.col}>
            <div className={classes.icon}>
                <span className={classes.i}>{icon}</span>
            </div>
            <h3 className={classes.header}>{title}</h3>
            <p className={classes.desc}>
                {Desc}
            </p>
        </div>
    );
};

export default Card;