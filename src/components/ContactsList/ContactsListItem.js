import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import style from './ContactsListItem.module.css';

export default function ContactItem() {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  const contacts = useSelector(contactsSelectors.getFilteredContact);

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactItem}>
          {name}: {number}
          <button
            className={style.buttonDel}
            type="submit"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}

ContactItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
