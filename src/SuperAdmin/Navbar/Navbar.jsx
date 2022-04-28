import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';

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

const NavBar = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            className={classes.title}
            variant='h5'
            color='inherit'
            align='center'
          >
            Super Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
