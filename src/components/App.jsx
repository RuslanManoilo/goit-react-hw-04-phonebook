import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, SecondTitle, Title } from "./GlobalStyle";


export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts-list");
    if (savedContacts === null) {
      return;
    };

    setContacts(() => (JSON.parse(savedContacts)));
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      return;
    };

    localStorage.setItem("contacts-list", JSON.stringify(contacts))
  }, [contacts]);

  
  const getContact = contactObj => {
    const isExist = contacts.some(contact => contact.name.toLowerCase() === contactObj.name.toLowerCase());

    if (isExist) {
      return alert(`${contactObj.name} is already in contacts.`);
    };

    setContacts(prevState => ([...prevState, contactObj]));
  };

  const onFilterChange = ({ target }) => {
    setFilter(() => (target.value.toLowerCase()));
  };

  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  const deleteContact = id => {
    setContacts((prevState) => (prevState.filter(contact => contact.id !== id)));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm getContact={getContact} />

      <SecondTitle>Contacts</SecondTitle>
      <Filter onFilterChange={onFilterChange} />
      <ContactList
        contacts={filterContacts()}
        deleteContact={deleteContact}
      />
    </Container>
  );
};