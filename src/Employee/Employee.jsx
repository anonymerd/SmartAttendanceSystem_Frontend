import React from 'react';
import './Employee.css';
import rimtikPic from '../assets/images/rimtik.jpg';

const Employee = () => {
  return (
    <div className='employee-page-container'>
      <div className='employee-details-container'>
        <div className='employee-image-container'>
          <img src={rimtikPic} alt='Ritik ki Pic' />
        </div>
        <div className='employee-details'>
          Name: Rimtik Id: 6161 DeptNo.: 65
        </div>
      </div>
      <div className='employee-logs-container'>
        <table className='attendance-logs'>
          <caption>Employee Attendance Logs</caption>
          <tr>
            <th>Type</th>
            <th>Date/Time</th>
            <th>Place</th>
          </tr>
          <tr>
            <td>Check In</td>
            <td>Aaj/Abhi</td>
            <td>Gaand Mein</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Employee;
