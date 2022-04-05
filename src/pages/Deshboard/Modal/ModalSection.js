import Typography from '@mui/material/Typography';
import { MyDate, MyDropdown } from '@/components/mui-form-component';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
const style = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalSection = ({ open, handleClose, control, handleSubmit, handleData }) => {

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Admin Status</h1>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit(handleData)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <MyDropdown name="status" control={control} label="Status" options={[
                                        { label: "Option 1", value: "option-1" },
                                        { label: "Option 2", value: "option-2" },
                                        { label: "Option 3", value: "option-3" },
                                    ]} />
                                </Grid>
                                <Grid item xs={12}>
                                    <MyDate name="startDate" label="Start Date" control={control} />
                                </Grid>
                                <Grid item xs={12}>
                                    <MyDate name="endDate" label="End Date" control={control} />
                                </Grid>
                                <Grid item xs={12}>
                                    <button type="submit">Save</button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default ModalSection;