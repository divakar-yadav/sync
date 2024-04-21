import React from 'react';
import { Grid, Typography, Avatar, Button, Paper } from '@mui/material';

const ProfilePage = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
                    <Typography variant="h4">John Doe</Typography>
                    <Typography variant="body1">johndoe@example.com</Typography>
                    <Typography variant="body1">Phone: 123-456-7890</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Typography variant="h5">Order History</Typography>
                    {/* Display user's order history here */}
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Typography variant="h5">Settings</Typography>
                    <Button variant="contained" color="primary">Edit Profile</Button>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default ProfilePage;
