import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
    <input type="text" name="filter" value={value} onChange={onChange} />
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
