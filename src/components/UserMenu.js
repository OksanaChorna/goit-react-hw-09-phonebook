import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';

const UserMenu = ({ name, onLogOut }) => {
  return (
    <>
      <div>
        <p>Welcome, {name}!</p>
      </div>
      <Button color="inherit" type="button" onClick={onLogOut}>
        Logout
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogOut: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
