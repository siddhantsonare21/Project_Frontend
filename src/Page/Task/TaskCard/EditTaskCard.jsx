import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const tags = ["C++", "OOPs with Java", "OS & SDM", "ADS", "DBT", "WBT", "Web Based Java", ".Net", "Aptitude"];

export default function EditTaskForm({ handleClose, open }) {
    const [formData, setFormDate] = useState({
        title: "",
        image: "",
        description: "",
        tags: [], // Ensure this is correctly used for tags
        deadline: new Date(),
    });
    const [selectedTags, setSelectedTags] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDate({
            ...formData,
            [name]: value,
        });
    };

    const handleTagsChange = (event, value) => {
        setFormDate({
            ...formData,
            tage: value, // Update the formData with selected tags
        });
    };

    const handleDeadlineChange = (date) => {
        setFormDate({
            ...formData,
            deadline: date
        })
    }

    const formateDate = (input) => {
        let {
            $y: year,
            $M: month,
            $D: day,
            $H: hours,
            $m: minutes,
            $s: seconds,
            $ms: milliseconds,
        } = input;

        const date = new Date(year, month, day, hours, minutes, seconds, milliseconds);

        const formatedDate = date.toISOString();
        return formatedDate;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { deadline } = formData;
        formData.deadline = formateDate(deadline)
        formData.tags = selectedTags;
        console.log("formData", formData, "deadline:", formData.deadline)
        handleClose()
    }



    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    fullWidth
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="PDF"
                                    fullWidth
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Autocomplete
                                    multiple
                                    id="multiple-limit-tags"
                                    options={tags}
                                    value={formData.tage} // Controlled value for Autocomplete
                                    onChange={handleTagsChange}
                                    getOptionLabel={(option) => option}
                                    renderInput={(params) => (
                                        <TextField
                                            label="Subject"
                                            fullWidth
                                            {...params}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        onChange={handleDeadlineChange}
                                        className="w-full"
                                        label="Assignment Deadline"
                                        renderInput={(params) => <TextField{...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth
                                    className="customeButton"
                                    type="submit"
                                    sx={{ padding: ".9rem" }}>
                                    UPDATE
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
