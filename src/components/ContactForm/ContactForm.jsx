import { Form, Label, Input, Button } from "./ContactForm.styled.js";

function ContactForm({ name, number, onChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;
