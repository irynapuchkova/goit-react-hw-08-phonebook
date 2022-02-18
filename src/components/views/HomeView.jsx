import { FcGlobe } from "react-icons/fc";
import { useSelector } from "react-redux";

import authSelectors from "../../redux/auth/auth-selectors";

import styled from "@emotion/styled";

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export default function HomeView() {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <Heading>
      Welcome on board ! {userName} :) <FcGlobe />
    </Heading>
  );
}
