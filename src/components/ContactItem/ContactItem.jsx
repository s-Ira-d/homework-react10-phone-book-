import { Item, Text, Button } from "./ContactItem.styled.js";

function ContactItem({ contact, onDelete }) {
  return (
    <Item>
      <Text>
        {contact.name}: {contact.number}
      </Text>
      <Button onClick={() => onDelete(contact.id)}>Delete</Button>
    </Item>
  );
}

export default ContactItem;
