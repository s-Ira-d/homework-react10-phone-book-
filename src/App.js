import "./App.css";
import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";
import { nanoid } from "nanoid";

function App() {
  const [state, setState] = useState({
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = state.contacts.some(
      (contact) => contact.name.toLowerCase() === state.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${state.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    };

    setState((prev) => ({
      ...prev,
      contacts: [...prev.contacts, newContact],
      name: "",
      number: "",
    }));
  };

  const handleFilterChange = (e) => {
    setState((prev) => ({
      ...prev,
      filter: e.target.value,
    }));
  };

  const deleteContact = (id) => {
    setState((prev) => ({
      ...prev,
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  const filteredContacts = state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm
        name={state.name}
        number={state.number}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <h2>Contacts</h2>

      <Filter value={state.filter} onChange={handleFilterChange} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
