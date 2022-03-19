import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { useForm, FormProvider } from 'react-hook-form'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
// const rows = [
//     createData('Frozen yoghurt', "12-12-22", "22-11-22"),
//   ];
  
const AdminTable = () => {
    const [tableData, setTableData] = React.useState([])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    // Form Config
    const defaultValues = {
        status: "",
        startDate: "",
        endDate: ""
    }
    const methods = useForm({
        defaultValues,
        // resolver: yupResolver(),
    });
    const { handleSubmit, reset, control, setValue, watch, getValues } = methods;
    const handleData = (data) => {
        setTableData( prevState => [...prevState, data])
    }

    return (
        <React.Fragment>
          <FormProvider {...methods}>
        `    <AdminTable 
                    open={open} 
                    handleClose={handleClose} 
                    control={control} 
                    handleSubmit={handleSubmit}
                    handleData={handleData}
                />
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell align="right">Start Date</StyledTableCell>
                    <StyledTableCell align="right">End Date</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {tableData.map((row) => (
                    <StyledTableRow key={row.status}>
                    <StyledTableCell component="th" scope="row">
                        {row.status}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.startDate.toDateString()}</StyledTableCell>
                    <StyledTableCell align="right">{row.endDate.toDateString()}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Button onClick={handleOpen}>Add Status</Button>`
          </FormProvider>
      </React.Fragment>
  )
}


export default AdminTable;