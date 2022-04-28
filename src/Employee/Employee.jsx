import React from 'react';
import { Button } from '@mui/material';
import './Employee.css';
import NavBar from './Navbar/Navbar';
import PersonCard from '../utils/PersonCard/PersonCard';
import Table from '../utils/Table/Table';

const getCurrDateTime = () => {
  const currentdate = new Date();
  return (
    currentdate.getDate() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.getFullYear() +
    ' @ ' +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds()
  );
};

const clientsInfo = {
  headers: ['Id', 'Organization Name', 'Admin Name', 'No. of Employees'],
  rows: [
    {
      id: 420,
      name: 'Ambazon',
      admin: 'Luxmon',
      noOfEmployees: 69,
    },
    {
      id: 421,
      name: 'Goomgle',
      admin: 'MonLux',
      noOfEmployees: 56,
    },
    {
      id: 422,
      name: 'Samsoong',
      admin: 'Kemshav',
      noOfEmployees: -39,
    },
    {
      id: 423,
      name: 'KPMG',
      admin: 'Amkhil',
      noOfEmployees: 64545646542,
    },
  ],
};

const newReqs = {
  headers: [
    'Organization Name',
    'Email',
    'No. of Employees',
    'Date/Time',
    'Action',
  ],
  rows: [
    {
      name: 'Philipcart',
      email: 'info@philipcart.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'MacroHard',
      email: 'info@macrohard.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'PayCM',
      email: 'info@paycm.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'Desi Katta',
      email: 'jaankaari@desikatta.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'Desi Katta',
      email: 'jaankaari@desikatta.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'Desi Katta',
      email: 'jaankaari@desikatta.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'Desi Katta',
      email: 'jaankaari@desikatta.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'Desi Katta',
      email: 'jaankaari@desikatta.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'Desi Katta',
      email: 'jaankaari@desikatta.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'Desi Katta',
      email: 'jaankaari@desikatta.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
    {
      name: 'Desi Katta',
      email: 'jaankaari@desikatta.com',
      noOfEmployees: 88,
      dateTime: getCurrDateTime(),
      action: (
        <div>
          <Button>Approve</Button> <Button>Deny</Button>
        </div>
      ),
    },
  ],
};

const employee = {
  name: 'Akhil Kumar',
  location: 'Gurugram Harayan, IN',
  department: 'R&D',
  designation: 'Analyst',
  picture: 'https://wallpapercave.com/wp/wp4292789.jpg',
};

const Employee = () => {
  return (
    <div className='employee-page-container'>
      <div className='navbar-container'>
        <NavBar />
        <section className='top-section'>
          <div>
            <PersonCard data={employee}/>
          </div>
        <div className='new-request-container'>
          <Table headers={newReqs.headers} rows={newReqs.rows} />
        </div>
        </section>
      </div>
    </div>
  );
};

export default Employee;
