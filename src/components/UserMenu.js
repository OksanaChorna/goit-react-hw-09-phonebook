import React, { useCallback } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch;
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

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
}
