import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = useCallback(
    event => {
      dispatch(changeFilter(event.target.value));
    },
    [dispatch],
  );

  return (
    <>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
