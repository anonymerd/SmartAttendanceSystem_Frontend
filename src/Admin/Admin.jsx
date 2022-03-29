import React from 'react';
import './Admin.css';
import amazonLogo from '../assets/images/amazon-logo.png';

const Admin = () => {
  return (
    <div className='admin-page-container'>
      <section className='top-section'>
        <div className='company-details'>
          <div className='logo-container'>
            <img src={amazonLogo} alt='CompanyLogo' />
          </div>
          <div className='details-container'>
            <div className='name-container'>Name: Amazon</div>
            <div className='admin-name-container'>
              Admin Name: Luxmon Gay Al Habib Fuddi
            </div>
            <div className='no-of-employees-container'>
              No. of Employees: 69
            </div>
          </div>
        </div>
        <div className='camera-btn-container'>
          <button className='open-camera-btn'>dabao aur camera kholo bc</button>
        </div>
      </section>
      <section className='middle-section'>
        <div className='attendance-title-container'>Live Attendance Info</div>
        <div className='attendance-logs-container'>
          <table className='attendance-logs'>
            <tr>
              <th>Emp Id</th>
              <th>Emp Name</th>
              <th>Dept Id</th>
              <th>Type</th>
              <th>Time</th>
              <th>Place</th>
            </tr>
            <tr>
              <td>69</td>
              <td>Luxmon Lodu</td>
              <td>007</td>
              <td>Check In</td>
              <td>4 bj kar 20 minute</td>
              <td>Apne papa k dukaan pe</td>
            </tr>{' '}
            <tr>
              <td>69</td>
              <td>Luxmon Lodu</td>
              <td>007</td>
              <td>Check In</td>
              <td>4 bj kar 20 minute</td>
              <td>Apne papa k dukaan pe</td>
            </tr>{' '}
            <tr>
              <td>69</td>
              <td>Luxmon Lodu</td>
              <td>007</td>
              <td>Check In</td>
              <td>4 bj kar 20 minute</td>
              <td>Apne papa k dukaan pe</td>
            </tr>{' '}
            <tr>
              <td>69</td>
              <td>Luxmon Lodu</td>
              <td>007</td>
              <td>Check In</td>
              <td>4 bj kar 20 minute</td>
              <td>Apne papa k dukaan pe</td>
            </tr>{' '}
            <tr>
              <td>69</td>
              <td>Luxmon Lodu</td>
              <td>007</td>
              <td>Check In</td>
              <td>4 bj kar 20 minute</td>
              <td>Apne papa k dukaan pe</td>
            </tr>
          </table>
        </div>
      </section>
      <section className='bottom-section'>
        <div className='employee-control-panel-container'>
          <div className='add-employee-btn-container'>
            <button>Add Employee</button>
          </div>
          <div className='remove-employee-btn-container'>
            <button>Remove Empoyee</button>
          </div>
        </div>
        <div className='search-employee-container'>
          <label htmlFor='employee-id-inp'>Employee Id</label>
          <input type='search' name='employee-id-inp' id='employee-id-inp' />
          <button>Search</button>
        </div>
      </section>
    </div>
  );
};

export default Admin;
