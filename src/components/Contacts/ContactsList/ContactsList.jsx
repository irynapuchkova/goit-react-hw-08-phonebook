import { useSelector } from "react-redux";

import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../../redux/contacts/contacts-operations";
import selectors from "../../../redux/contacts/contacts-selectors";

import {
  BtnDelete,
  ContactsList,
  Contact,
  ContactData,
} from "./ContactsList.styled";

function ContactList() {
  const [deleteContact] = useDeleteContactMutation();
  const { data: contacts, isFetching } = useGetContactsQuery();

  const filter = useSelector(selectors.filter);

  let visibleContacts = null;

  const getFilteredContacts = () => {
    if (!contacts) {
      return;
    }

    visibleContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter)
    );
  };

  getFilteredContacts();

  return (
    <ContactsList>
      {isFetching && <p>Loading...</p>}
      {contacts &&
        visibleContacts.map(({ id, name, number }) => (
          <Contact key={id}>
            <ContactData>{name}</ContactData>
            <ContactData>{number}</ContactData>
            <BtnDelete type="button" onClick={() => deleteContact(id)}>
              Delete
            </BtnDelete>
          </Contact>
        ))}
    </ContactsList>
  );
}

export default ContactList;
