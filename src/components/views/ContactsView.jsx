import { useSelector } from "react-redux";
import styled from "@emotion/styled";

import Section from "../contacts/Section/Section";
import ContactsList from "../contacts/ContactsList/ContactsList";
import ContactForm from "../contacts/ContactForm/ContactForm";
import Filter from "../contacts/Filter/Filter";
import authSelectors from "../../redux/auth/auth-selectors";

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
