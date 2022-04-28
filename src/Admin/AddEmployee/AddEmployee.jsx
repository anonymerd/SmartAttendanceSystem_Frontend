import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';

import PopupCamera from '../PopupCamera/PopupCamera';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const inputPicRef = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addEmployee = (event) => {
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
        Add Employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Employee</DialogTitle>
        <form class='add-employee-form' onSubmit={addEmployee}>
          <DialogContent>
            <DialogContentText>Add employees here!</DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='id'
              name='empId'
              label='Id'
              type='text'
              fullWidth
              variant='standard'
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              name='name'
              label='Name'
              type='text'
              fullWidth
              variant='standard'
            />
            <TextField
              autoFocus
              margin='dense'
              id='email'
              name='email'
              label='Email'
              type='email'
              fullWidth
              variant='standard'
            />
            <TextField
              autoFocus
              margin='dense'
              id='department'
              name='department'
              label='Department'
              type='text'
              fullWidth
              variant='standard'
            />
            {/* <PopupCamera image={inputPicRef} /> */}
            <input type='file' name='image' ref={inputPicRef} />
          </DialogContent>
          <DialogActions>
            <Button type='submit'>Add</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}