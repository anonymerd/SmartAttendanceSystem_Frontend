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
import env from 'react-dotenv';
import { useLocation } from 'react-router-dom';

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

// const apiAddress = 'http://127.0.0.1:8000/api/employee/';
const apiAddress = env.SERVER_ADDRESS + '/employee';
// console.log(env.SERVER_ADDRESS)
const defaultEmployee = {
  name: '',
  empId: '',
  image:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fenphamedbiotech.com%2Four-team%2F&psig=AOvVaw13HFLxYZx5i_MtjHwGV76L&ust=1651534943276000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC9m5-9v_cCFQAAAAAdAAAAABAD',
};

const defaultCompany = {
  name: '',
  location: '',
  adminName: '',
  noOfEmployees: '',
};

const Admin = () => {
  const { state } = useLocation();
  const [empIds, updateEmpIds] = useState([]);
  const [openEmpDetails, setOpenEmpDetails] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState(defaultEmployee);
  const [companyDetails, setCompanyDetails] = useState(defaultCompany);

  const getAdminData = () => {};

  useEffect(() => {
    const getCompanyData = () => {
      axios
        .get(env.SERVER_ADDRESS + '/company/' + state.companyId)
        .then((res) => {
          console.log(res);
          const data = res.data.data;
          data.image = env.SERVER_ROOT_ADDRESS + data.image;
          console.log(data.image);
          setCompanyDetails({
            name: data.name,
            location: data.city + ', ' + data.country,
            adminName: data.adminName,
            noOfEmployees: data.noOfEmployees,
            image: data.image,
          });
        });
    };

    const getUserIds = () => {
      axios
        .get(env.SERVER_ADDRESS + '/user/' + state.companyId)
        .then((res) => {
          updateEmpIds(res.data.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    getCompanyData();
    getUserIds();
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
            <CompanyDetails data={companyDetails} />
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
