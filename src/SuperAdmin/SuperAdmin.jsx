import Table from '../utils/Table/Table';
import { Button } from '@mui/material';
import React from 'react';
import './SuperAdmin.css';
import PersonCard from '../utils/PersonCard/PersonCard';
import Navbar from './Navbar/Navbar';

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
  name: 'Micheal Clarke',
  location: 'Washington DC, US',
  department: 'R&D',
  designation: 'Peon',
  picture: 'https://wallpapercave.com/wp/wp4292787.jpg',
};

const SuperAdmin = () => {
  return (
    <div className='super-admin-page-container'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <section className='top-section'>
        <div className='super-admin-info-container'>
          <PersonCard data={employee} />
        </div>
        <div className='new-request-container'>
          <Table headers={newReqs.headers} rows={newReqs.rows} />
        </div>
      </section>

      <section className='bottom-section'>
        <div className='client-info-container'>
          <Table headers={clientsInfo.headers} rows={clientsInfo.rows} />
        </div>
      </section>
    </div>
  );
};

export default SuperAdmin;
