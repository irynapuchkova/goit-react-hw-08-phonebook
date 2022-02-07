import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/contacts/contacts-reducer";
import { Title, Input, Wrapper } from "./Filter.styled";

function Filter() {
  const dispatch = useDispatch();

  const handleFilter = ({ currentTarget: { value } }) => {
    dispatch(addFilter(value.toLowerCase()));
  };

  return (
    <Wrapper>
      <Title>Find contacts by name</Title>
      <Input type="text" placeholder="Filter" onChange={handleFilter} />
    </Wrapper>
  );
}

export default Filter;
