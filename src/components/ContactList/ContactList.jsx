import propTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { ListContacts } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContacts>
      {contacts().map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: propTypes.func.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};