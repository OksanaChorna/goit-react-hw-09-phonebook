import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsForm from '../components/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';
import ContactsListItem from '../components/ContactsList/ContactsListItem';
import Container from '../components/Container';
import Filter from '../components/Filter/Filter';
import contactsOperations from '../redux/contacts/contacts-operations';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactsForm />
        <div>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList>
            <ContactsListItem />
          </ContactsList>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsPage);
