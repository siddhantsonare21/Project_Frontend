import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button, ListItemAvatar, ListItemText, ListItem, Divider, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 2,
};

const tasks = [1, 1, 1, 1]; // Assuming tasks are users for this example

export default function UserList({ handleClose, open }) {
    // State to keep track of selected users
    const [selectedUsers, setSelectedUsers] = React.useState(new Array(tasks.length).fill(false));

    // Handler for selecting all users
    const handleSelectAll = () => {
        setSelectedUsers(new Array(tasks.length).fill(true));
    };

    // Handler for selecting a single user
    const handleSelectUser = (index) => {
        const newSelection = [...selectedUsers];
        newSelection[index] = !newSelection[index];
        setSelectedUsers(newSelection);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" gutterBottom>
                        Assign Tasks
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSelectAll}
                        sx={{ mb: 2 }}
                    >
                        Select All
                    </Button>
                    {
                        tasks.map((item, index) =>
                            <React.Fragment key={index}>
                                <div className='flex item-center justify-between w-full'>
                                    <div>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar src='c' />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={"Siddhant"}
                                            />
                                        </ListItem>
                                    </div>
                                    <div>
                                        <Button
                                            className='customeButton'
                                            onClick={() => handleSelectUser(index)}
                                        >
                                            {selectedUsers[index] ? 'Deselect' : 'Select'}
                                        </Button>
                                    </div>
                                </div>
                                {index !== tasks.length - 1 && <Divider variant='inset' />}
                            </React.Fragment>
                        )
                    }
                </Box>
            </Modal>
        </div>
    );
}
