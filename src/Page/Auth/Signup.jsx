import React, { useState } from 'react';
import { FormControl, InputLabel, TextField, Button, Select, MenuItem } from '@mui/material';

const Signup = ({ togglePanel }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("signup form", formData);
    };

    return (
        <div>
            <h1 className='text-lg font-bold text-center pb-8'>Register</h1>
            <form className='space-y-3' onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder='Enter your full name...'
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email...'
                />
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter your password...'
                />
                <FormControl fullWidth>
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        id="role-select"
                        value={formData.role}
                        label="Role"
                        name="role"
                        onChange={handleChange}
                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>STUDENT</MenuItem>
                        <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    <Button fullWidth type="submit" sx={{ padding: ".9rem" }}>
                        Register
                    </Button>
                </div>
            </form>
            <div className='mt-5 flex items-center gap-2 py-5 justify-center'>
                <span>Already have an account?</span>
                <Button onClick={togglePanel}>Sign In</Button>
            </div>
        </div>
    );
};

export default Signup;
