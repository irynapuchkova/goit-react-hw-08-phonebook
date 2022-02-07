import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../redux/contacts/contacts-actions/fetchContacts";
import { useSelector } from "react-redux";
import selectors from "../../redux/contacts/contacts-selectors";

import {
  BtnDelete,
  ContactsList,
  Contact,
  ContactData,
} from "./ContactList.styled";

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
        visibleContacts.map(({ id, name, phone }) => (
          <Contact key={id}>
            <ContactData>{name}</ContactData>
            <ContactData>{phone}</ContactData>
            <BtnDelete type="button" onClick={() => deleteContact(id)}>
              Delete
            </BtnDelete>
          </Contact>
        ))}
    </ContactsList>
  );
}

export default ContactList;
