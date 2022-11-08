import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { FormWrap, TitlePhone, TitleContact } from './App.styled';
import { useState, useEffect } from 'react';

export function App() {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(() => parsedContacts ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsLS = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsLS);
  }, [contacts]);

  const handleSubmit = newContact => {
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`This contact ${newContact.name} is already exist`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contact => {
    const indexToDelete = contacts.findIndex(cont => cont.id === contact.id);
    setContacts(contacts.filter((_, index) => index !== indexToDelete));
  };

  const newContactList = () => {
    return contacts.filter(({ name }) => {
      const searchingName = name.toLowerCase();
      return searchingName.includes(filter);
    });
  };
  const list = newContactList();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#010101',
      }}
    >
      <FormWrap>
        <TitlePhone>Phonebook</TitlePhone>
        <ContactForm onSubmit={handleSubmit} />

        <TitleContact>Contacts</TitleContact>
        <Filter onFilter={setFilter} />
        <ContactList contacts={list} onDelete={deleteContact} />
      </FormWrap>
    </div>
  );
}
