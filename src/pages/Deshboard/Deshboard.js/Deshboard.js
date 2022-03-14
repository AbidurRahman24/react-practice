import React from 'react';
import ModalSection from '../Modal/ModalSection';
import SideBar from '../SideBar/SideBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Deshboard.css'
import AdminTable from '../AdminTable/AdminTable';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Deshboard = () => {
    return (
        <>  
        <h1 style={{textAlign: "center"}}>Admin View Project Time Line</h1> 
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <SideBar />
        </Grid>
        <Grid item xs={9}>
          <AdminTable />
        </Grid>
      </Grid>
    </Box>
         {/* <div className='container'>
            <div className='div1'>
                <SideBar />
            </div>
            <div className='div2'>
                <Status />
            </div>
            <div className='div3'>
                <DateTime />
            </div>
        </div> */}
        <ModalSection />
        </>

    );
};

export default Deshboard;