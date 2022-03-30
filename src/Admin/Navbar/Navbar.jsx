import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  optionsDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h5' color='inherit'>
            Company Admin Dashboard
          </Typography>

          <div className={classes.optionsDiv}>
            <Button variant='contained' size='small' style={{ margin: '5px' }}>
              Employee Directory
            </Button>
            <Button
              variant='contained'
              size='small'
              style={{ margin: '5px' }}
              component={Link}
              to='/capture-attendance'
              target='_blank'
            >
              Launch Camera
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;