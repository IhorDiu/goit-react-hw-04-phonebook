import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import initialContacts from '../../data.json';
import { Title, Subtitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

componentDidMount() {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    this.setState({ contacts: parsedContacts});
    return;
    }
    this.setState({contacts: initialContacts});
  }


componentDidUpdate(prevProps, prevState) {
  if (prevState.contacts !== this.state.contacts) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}

  addContact = newContact => {
    if (
      !this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      this.setState(preState => ({
        contacts: [...preState.contacts, newContact],
      }));
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  findContact = e => {
    this.setState({ filter: e.target.value });
  };

  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    const filterValue = filter.toLowerCase();

    return filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : contacts;
  };

  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={this.findContact} />
        <ContactList
          contacts={this.onFilterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
