import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const EndDate = () => {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
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
    );
};

export default EndDate;