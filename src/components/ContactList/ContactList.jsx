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

// componentDidMount() {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     const parsedContacts = JSON.parse(savedContacts);
//     this.setState({ contacts: parsedContacts});
//     return;
//     }
//     this.setState({contacts: initialContacts});
//   }


// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }
