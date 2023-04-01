import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useLocalStorage } from 'hooks/useLocalStorage';

import initialContacts from '../../data.json';
import { Title, Subtitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    if (
      !contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      setContacts(prevState => [...prevState, newContact]);
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  
  

  const findContact = e => {
    setFilter(e.target.value);
  };

  const onFilterContacts = () => {
    const filterValue = filter.toLowerCase();
    return filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contacts;
  };
  

  const deleteContact = contactID => {
    setContacts(() => contacts.filter(contact => contact.id !== contactID));
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />

      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={findContact} />
      <ContactList
        contacts={onFilterContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
