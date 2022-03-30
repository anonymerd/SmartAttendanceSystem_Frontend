import { Grid, Box } from '@material-ui/core';
import React from 'react';
import './Admin.css';
import AttendanceLogs from './AttendanceLogs/AttendanceLogs';
import CompanyDetails from './CompanyDetails/CompanyDetails';
import NavBar from './Navbar/Navbar';

const Admin = () => {
  return (
    <div className='admin-page-container'>
      <NavBar />
      <Box sx={{ bgcolor: '#f0f0f0', padding: '20px' }}>
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='space-evenly'
          // style={{ height: 'inherit' }}
        >
          <Grid item xs={8}>
            <AttendanceLogs />
          </Grid>
          <Grid item xs={4}>
            <CompanyDetails />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Admin;
