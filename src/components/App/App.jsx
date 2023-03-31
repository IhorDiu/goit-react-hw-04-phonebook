import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import initialContacts from '../../data.json';
import { Title, Subtitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactID)
    );
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
