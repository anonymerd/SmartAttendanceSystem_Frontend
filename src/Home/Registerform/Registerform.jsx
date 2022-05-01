import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';

export default function Registerform() {

  const [open, setOpen] = React.useState(false);
  const inputPicRef = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addCompany = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const apiAddress = 'http://127.0.0.1:8000/api/employee/';

    axios
      .post(apiAddress, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    handleClose();
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Register a Company
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={addCompany}>
          <DialogContent>
            <DialogContentText>Register Your Company here!</DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='comp-name'
              name='comp-name'
              label='Company Name'
              type='text'
              fullWidth
              variant='standard'
            />
            <TextField
              margin='dense'
              id='comp-email'
              name='comp-email'
              label='Company Email'
              type='email'
              fullWidth
              variant='standard'
            />
            <TextField
              margin='dense'
              id='city'
              name='city'
              label='City'
              type='text'
              fullWidth
              variant='standard'
            />
            <TextField
              margin='dense'
              id='country'
              name='country'
              label='Country'
              type='text'
              fullWidth
              variant='standard'
            />
            <TextField
              margin='dense'
              id='zipcode'
              name='zipcode'
              label='Zipcode'
              type='text'
              fullWidth
              variant='standard'
            />
            <div style={{margin: '2% 0'}}>
              <span>Company Logo: </span>
              <input type='file' name='image' ref={inputPicRef} />
            </div>

          </DialogContent>
         
          <DialogContent>
          <DialogContentText>Add Admin Details Here!</DialogContentText>
            <TextField
                margin='dense'
                id='admin-name'
                name='admin-name'
                label='Admin Name'
                type='text'
                fullWidth
                variant='standard'
              />
              <TextField
                margin='dense'
                id='admin-email'
                name='admin-email'
                label='Admin Email'
                type='email'
                fullWidth
                variant='standard'
              />

              <TextField
                margin='dense'
                id='admin-id'
                name='admin-id'
                label='Admin Id'
                type='text'
                fullWidth
                variant='standard'
              />

              <TextField
                margin='dense'
                id='admin-designation'
                name='admin-designation'
                label='Admin Designation'
                type='text'
                fullWidth
                variant='standard'
              />
              <div style={{margin: '2% 0'}}>
                <span>Admin Image: </span>
                <input type='file' name='image' ref={inputPicRef} />
              </div>
          </DialogContent>
          <DialogActions>
            <Button type='submit'>Register</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
