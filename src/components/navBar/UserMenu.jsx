import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import authSelectors from "../../redux/auth/auth-selectors";
import { useLogOutUserMutation } from "../../redux/auth/auth-operations";

import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Welcome = styled.span`
  margin-right: 12px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 80px;
  height: 32px;
  border: 2px solid transparent;
  background-color: tomato;
  cursor: pointer;
`;

export default function UserMenu() {
  const navigate = useNavigate();
  const [logOutUser] = useLogOutUserMutation();

  const userName = useSelector(authSelectors.getUserName);

  const onBtnLogOutClick = () => {
    navigate("/");
    logOutUser();
  };

  return (
    <Container>
      <Welcome>Welcome on board, {userName} :)</Welcome>
      <Button type="button" onClick={onBtnLogOutClick}>
        Log out
      </Button>
    </Container>
  );
}
