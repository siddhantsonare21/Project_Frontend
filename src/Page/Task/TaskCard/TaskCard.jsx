import { IconButton } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UserList from '../UserList';
import { useState } from 'react';
import SubmissionList from './SubmissionList';
import EditTaskForm from './EditTaskCard';


const role = "ROLE_ADMIN"
const TaskCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const [openUserList, setOpenUserList] = useState(false);
    const handleCloseUserList = () => {
        setOpenUserList(false)
    }
    const handleOpenUserList = () => {
        setOpenUserList(true);
        handleMenuClose()
    }

    const [openSubmissionList, setOpenSubmissionList] = useState(false);
    const handleCloseSubmissionList = () => {
        setOpenSubmissionList(false)
    }
    const handleOpenSubmissionList = () => {
        setOpenSubmissionList(true)
        handleMenuClose()
    };
    const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
    const handleCloseUpdateTaskForm = () => {
        setOpenSubmissionList(false)
    }
    const handleOpenUpdateTaskModel = () => {
        setOpenUpdateTaskForm(true);
        handleMenuClose()
    }
    const handleDeleteTask = () => {
        handleMenuClose()

    }
    return (
        <div>
            <div className='card 1g: flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-
                [70%]'>
                    <div className=''>
                        <img src=" " alt="" />
                    </div>
                    <div className='space-y-5'>

                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>OOPS Assignment 1</h1>
                            <p className='text-gray-500 text-sm'>use latest framworks and technology to make this website</p>
                        </div>
                        <div className='flex flex-wrap gap-2 items-center'>
                            {[1, 1, 1, 1].map((item) => <span className='py-1 px-5
                            rounded-full techStack'>
                                Java
                            </span>)}
                        </div>
                    </div>
                </div>

                <div>
                    <IconButton id="basic-button"
                        aria-controls={openMenu ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleMenuClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            role === "ROLE_ADMIN" ? <>
                                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
                                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>



                            </> : <>

                            </>
                        }

                    </Menu>
                </div>
            </div>
            <UserList open={openUserList} handleClose={handleCloseUserList} />
            <SubmissionList open={openSubmissionList}
                handleClose={handleCloseSubmissionList} />
            <EditTaskForm open={openUpdateTaskForm} handleClose=
                {handleCloseUpdateTaskForm} />
        </div>
    )
}

export default TaskCard