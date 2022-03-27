import React from 'react';
import './SuperAdmin.css';
const SuperAdmin = () => {
  return (
    <div className='super-admin-page-container'>
      <div className='client-info-container'>
        <table className='client-info'>
          <caption>All Active Client Info</caption>
          <tr>
            <th>Id</th>
            <th>Organisation Name</th>
            <th>Admin Name</th>
            <th>No. of Employees</th>
          </tr>
          <tr>
            <td>420</td>
            <td>Ambazon</td>
            <td>Luxmon Gay Al Habib Fuddi</td>
            <td>69</td>
          </tr>
        </table>
      </div>

      <div className='new-request-container'>
        <table className='new-requests'>
          <caption>New Requests List</caption>
          <tr>
            <th>Organization Name</th>
            <th>Email</th>
            <th>No. of Employees</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>Philipcart</td>
            <td>madarchod@philipcart.com</td>
            <td>Infinite</td>
            <td>Aaj/Abhi</td>
            <td>
              <button>Approve</button>
              <button>Deny</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SuperAdmin;
