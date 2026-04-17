import "./App.css";
import { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Filter from "./components/Filter/Filter.jsx";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Mary", number: "+(38) 099 123 45 67" },
      { id: "id-2", name: "Ira", number: "+(38) 067 234 56 78" },
      { id: "id-3", name: "Danya", number: "+(38) 095 345 67 89" },
      { id: "id-4", name: "Vanya", number: "+(38) 096 456 78 90" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
      name: "",
      number: "",
    }));
  };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.handleFilterChange} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
