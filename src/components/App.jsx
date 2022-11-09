import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { FormWrap, TitlePhone, TitleContact } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from '../redux/contactSlice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleSubmit = newContact => {
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`This contact ${newContact.name} is already exist`)
      : dispatch(addContact(newContact));
  };

  const deleteContact = contact => {
    const indexToDelete = contacts.findIndex(cont => cont.id === contact.id);
    dispatch(removeContact(indexToDelete));
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
        <Filter />
        <ContactList contacts={list} onDelete={deleteContact} />
      </FormWrap>
    </div>
  );
}
