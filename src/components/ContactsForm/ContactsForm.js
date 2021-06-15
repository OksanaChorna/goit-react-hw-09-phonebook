import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import PropsType from 'prop-types';
import style from './ContactsForm.module.css';
import shortid from 'shortid';

// const mapDispatchToProps = dispatch => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(contactsOperations.addContact({ name, number })),
// });

export default function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(contactsSelectors.getAllContacts);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const hasContacts = contact =>
      contact.name === this.state.name || contact.number === this.state.number;

    if (items.some(hasContacts)) {
      alert(`Contact is already in contacts`);
      return;
    }

    onSubmit({ ...this.state });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <label htmlFor={numberInputId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactsForm.PropsType = {
  onSubmit: PropsType.func.isRequired,
};
