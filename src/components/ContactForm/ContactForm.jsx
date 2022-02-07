import shortid from "shortid";
import { useState } from "react";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../redux/contacts/contacts-actions/fetchContacts";

import { Form, Input, BtnSubmit } from "./ContactForm.styled";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleInputValue = ({ currentTarget: { name, value } }) => {
    name === "name" ? setName(value) : setNumber(value);
  };

  const resetState = () => {
    setName("");
    setNumber("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const contactsData = data;
    const contact = { id: shortid.generate(), name, number };
    const existedNames = contactsData.map((contact) => contact.name);

    if (existedNames.includes(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }

    addContact(contact);
    resetState();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputValue}
      />
      <Input
        type="tel"
        name="number"
        placeholder="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputValue}
      />
      <BtnSubmit type="submit">Add contact</BtnSubmit>
    </Form>
  );
}

export default ContactForm;
