import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

// const mapStateToProps = state => ({
//   value: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

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
