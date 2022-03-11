import React from 'react';

const PricePlanSection = (props) => {
    console.log(props);
   const {title, icons, provider,engage,collect} =  props.price
    return (
        <div class="row row-table">
                        <div class="col title">
                            <p class="table-title">{title}</p>
                        </div>
                        <div class="col">{collect && icons}</div>
                        <div class="col">{engage && icons}</div>
                        <div class="col">{provider && icons}</div>
                    </div>
    );
};

export default PricePlanSection;