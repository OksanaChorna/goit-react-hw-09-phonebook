import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

export default function AppBarComp() {
  const classes = useStyles();

  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar id="toolbar-menu">
            <Typography
              variant="h6"
              color="inherit"
              className={classes.title}
              component={NavLink}
              exact
              to="/"
            >
              Main
            </Typography>

            {isLoggedIn && (
              <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                component={NavLink}
                exact
                to="/contacts"
              >
                PhoneBook
              </Typography>
            )}

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
