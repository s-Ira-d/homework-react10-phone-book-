import { Wrapper, Input } from "./Filter.styled.js";

function Filter({ value, onChange }) {
  return (
    <Wrapper>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
}

export default Filter;
