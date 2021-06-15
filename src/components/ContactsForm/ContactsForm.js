import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import style from './ContactsForm.module.css';
import shortid from 'shortid';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Field type ${name} is not processed`);
    }
  };

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      const hasContacts = contact =>
        contact.name === name || contact.number === number;

      if (items.some(hasContacts)) {
        alert(`Contact is already in contacts`);
        return;
      }

      dispatch(contactsOperations.addContact({ name, number }));

      reset();
    },
    [dispatch, items, name, number],
  );

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
