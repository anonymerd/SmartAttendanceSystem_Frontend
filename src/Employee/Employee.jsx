import React, { useState, useEffect } from 'react';
import './Employee.css';
import NavBar from './Navbar/Navbar';
import PersonCard from '../utils/PersonCard/PersonCard';
import Table from '../utils/Table/Table';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import env from 'react-dotenv';

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

// const clientsInfo = {
//   headers: ['Id', 'Organization Name', 'Admin Name', 'No. of Employees'],
//   rows: [
//     {
//       id: 420,
//       name: 'Ambazon',
//       admin: 'Luxmon',
//       noOfEmployees: 69,
//     },
//     {
//       id: 421,
//       name: 'Goomgle',
//       admin: 'MonLux',
//       noOfEmployees: 56,
//     },
//     {
//       id: 422,
//       name: 'Samsoong',
//       admin: 'Kemshav',
//       noOfEmployees: -39,
//     },
//     {
//       id: 423,
//       name: 'KPMG',
//       admin: 'Amkhil',
//       noOfEmployees: 64545646542,
//     },
//   ],
// };

// const newReqs = {
//   headers: [
//     'Organization Name',
//     'Email',
//     'No. of Employees',
//     'Date/Time',
//     'Action',
//   ],
//   rows: [
//     {
//       name: 'Philipcart',
//       email: 'info@philipcart.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'MacroHard',
//       email: 'info@macrohard.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'PayCM',
//       email: 'info@paycm.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'Desi Katta',
//       email: 'jaankaari@desikatta.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'Desi Katta',
//       email: 'jaankaari@desikatta.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'Desi Katta',
//       email: 'jaankaari@desikatta.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'Desi Katta',
//       email: 'jaankaari@desikatta.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'Desi Katta',
//       email: 'jaankaari@desikatta.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'Desi Katta',
//       email: 'jaankaari@desikatta.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'Desi Katta',
//       email: 'jaankaari@desikatta.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//     {
//       name: 'Desi Katta',
//       email: 'jaankaari@desikatta.com',
//       noOfEmployees: 88,
//       dateTime: getCurrDateTime(),
//       action: (
//         <div>
//           <Button>Approve</Button> <Button>Deny</Button>
//         </div>
//       ),
//     },
//   ],
// };

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

const defaultEmployee = {
  name: '',
  email: '',
  image:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fenphamedbiotech.com%2Four-team%2F&psig=AOvVaw13HFLxYZx5i_MtjHwGV76L&ust=1651534943276000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC9m5-9v_cCFQAAAAAdAAAAABAD',
  designation: '',
};

const Employee = () => {

  const { state } = useLocation();
  const [employeeDetails, setEmployeeDetails] = useState(defaultEmployee);

  useEffect(() => {

    const getEmployeeData = () => {
      axios
        .get(env.SERVER_ADDRESS + '/user/' + state.companyId + '/' + state.userId)
        .then((res) => {
          console.log(res);
          const data = res.data.data;
          data.image = env.SERVER_ROOT_ADDRESS + data.image;
          console.log(data.image);
          setEmployeeDetails({
            name: data.name,
            email: data.email,
            image: data.image,
            designation: data.designation
          });
        });
    };

    getEmployeeData();
  }, []);

  return (
    <div className='employee-page-container'>
      <div className='navbar-container'>
        <NavBar />
        <section className='top-section'>
          <div>
            <PersonCard data={employeeDetails} />
          </div>
          <div className='new-request-container'>
            <Table headers={headers} rows={data} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Employee;
