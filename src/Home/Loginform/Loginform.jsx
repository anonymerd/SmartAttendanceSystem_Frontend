import React, { Component } from "react";
import '../Home.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Registerform from "../Registerform/Registerform";


export default function LoginForm() {
  return (
    <div className="App">
      <form className="form">
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
            id='id'
            name='empId'
            label='Password'
            type='text'
            fullWidth
            variant='standard'
          />
        <DialogActions> 
          <Button type='submit' variant='contained' size='large' style= {{margin: '0 20px'}}>Login</Button>
          <Registerform />
        </DialogActions>
      </form>
    </div>
  )
}
