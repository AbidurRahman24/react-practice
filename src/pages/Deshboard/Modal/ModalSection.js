
import React, {useState} from 'react';
import Modal from 'react-modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from '@mui/material/Button';
import Seleted from './Seleted';
Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding:'50px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
const ModalSection = () => {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Admin Status</h1>
            <Button onClick={()=> setIsOpen(true)} variant="contained">Admin Modal</Button>
            <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={()=> setIsOpen(false)}
            style={customStyles}
            >
                <h2>Admin Status</h2>
                <Seleted />
               <div style={{margin: "15px 0px" }}>
               <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        
                        <DateTimePicker
                            label="Start Date"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
               </div>
                <div style={{margin: "15px 0" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        
                        <DateTimePicker
                            label="End Date"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
                </div>
                <Button onClick={()=> setIsOpen(false)} variant="contained">Close</Button>
            </Modal>
        </div>
    );
};

export default ModalSection;