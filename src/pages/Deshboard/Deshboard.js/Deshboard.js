import React from 'react';
import DateTime from '../DateTime/DateTime';
import ModalSection from '../Modal/ModalSection';
import SideBar from '../SideBar/SideBar';
import Status from '../Status/Status';
import './Deshboard.css'
const Deshboard = () => {
    return (
        <>  
        <h1 style={{textAlign: "center"}}>Admin View Project Time Line</h1> 
        
         <div className='container'>
            <div className='div1'>
                <SideBar />
            </div>
            <div className='div2'>
                <Status />
            </div>
            <div className='div3'>
                <DateTime />
            </div>
        </div>
        <ModalSection />
        </>

    );
};

export default Deshboard;