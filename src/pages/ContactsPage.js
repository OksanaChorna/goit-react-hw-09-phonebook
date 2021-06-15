import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsForm from '../components/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';
import ContactsListItem from '../components/ContactsList/ContactsListItem';
import Container from '../components/Container';
import Filter from '../components/Filter/Filter';
import contactsOperations from '../redux/contacts/contacts-operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

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
