import { Grid, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import CompanyDetails from './CompanyDetails/CompanyDetails';
import NavBar from './Navbar/Navbar';
import Table from '../utils/Table/Table';
import SearchInput from './SearchInput/SearchInput';
import AddEmployee from './AddEmployee/AddEmployee';
import RemoveEmployee from './RemoveEmployee/RemoveEmployee';
import Popup from './Camera/Popup/Popup';

import './Admin.css';
import axios from 'axios';

const data = [
  {
    EmpId: 1,
    Name: 'Rohit Bisht',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 2,
    Name: 'Keshav',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 3,
    Name: 'Akhil',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 4,
    Name: 'Jane Doe',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 1,
    Name: 'Rohit Bisht',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 2,
    Name: 'Keshav',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 3,
    Name: 'Akhil',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
  {
    EmpId: 4,
    Name: 'Jane Doe',
    CheckIn: '20-08-2365',
    CheckOut: '36-89-1265',
  },
];

const headers = ['EmpId', 'Name', 'CheckIn', 'CheckOut'];

const apiAddress = 'http://127.0.0.1:8000/api/employee/';

const defaultEmployee = {
  name: 'Rohit Bisht',
  empId: 'EMPH2856',
  image:
    'https://www.seekpng.com/png/detail/895-8958633_okhand22-dank-memes-meme-mouth.png',
};

const Admin = () => {
  const [empIds, updateEmpIds] = useState([]);
  const [openEmpDetails, setOpenEmpDetails] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState(defaultEmployee);

  useEffect(() => {
    axios
      .get(apiAddress)
      .then((res) => {
        updateEmpIds(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleClickOpen = () => {
    setOpenEmpDetails(true);
  };
  const handleClose = () => {
    setOpenEmpDetails(false);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Prevent's default 'Enter' behavior.
      event.defaultMuiPrevented = true;
      const empId = event.target.value;
      axios.get(apiAddress + empId).then((res) => {
        console.log(res.data);
        setEmployeeDetails(res.data);
        setOpenEmpDetails(true);
      });
      console.log(event.target.value);
    }
  };

  return (
    <div className='admin-page-container'>
      <NavBar />
      <Box sx={{ bgcolor: '#f0f0f0', padding: '20px' }}>
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='space-evenly'
        >
          <Grid item xs={8}>
            <Table headers={headers} rows={data} />
          </Grid>
          <Grid item xs={4}>
            <CompanyDetails />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='space-evenly'
        >
          <Grid item xs={4}>
            <SearchInput
              data={empIds}
              label='Search Employee'
              onKeyDown={handleSearch}
            />
          </Grid>
          <Grid item xs={4}>
            <AddEmployee></AddEmployee>
            <RemoveEmployee></RemoveEmployee>
          </Grid>
        </Grid>
        <Popup
          employee={employeeDetails}
          openDialog={openEmpDetails}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      </Box>
    </div>
  );
};

export default Admin;
