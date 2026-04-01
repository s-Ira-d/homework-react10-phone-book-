import ContactItem from "../ContactItem/ContactItem.jsx";
import { List } from "./ContactList.styled.js";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={onDeleteContact}
        />
      ))}
    </List>
  );
}

export default ContactList;
