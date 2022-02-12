import { useSelector } from "react-redux";
import styled from "@emotion/styled";

import Section from "../components/Contacts/Section/Section";
import ContactsList from "../components/Contacts/ContactsList/ContactsList";
import ContactForm from "../components/Contacts/ContactForm/ContactForm";
import Filter from "../components/Contacts/Filter/Filter";
import authSelectors from "../redux/auth/auth-selectors";

const FormSet = styled.div`
  font: 95% Arial, Helvetica, sans-serif;
  max-width: 400px;
  margin: 10px auto;
  padding: 16px;
  background: #f7f7f7;
`;

export default function ContactsView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <FormSet>
          <Section title={"Phonebook"}>
            <ContactForm />
          </Section>

          <Section title={"Contacts"}>
            <Filter />
            <ContactsList />
          </Section>
        </FormSet>
      )}
    </>
  );
}
