import styled from "styled-components";

const FormStyled = styled.form`
  align-items: center;
  align-content: center;
  text-align: center;
  background-color: white;
  margin-top: 4px;
`;

const SelectStyled = styled.select`
  text-align: center;
  font-size: 20px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  border: none;
  background-color: white;
  height: 40px;
`;

interface ISelect {
  filter: string;
  handlechange: any;
  anos: Array<string>;
}

export default function Select({ filter, handlechange, anos }: ISelect) {
  return (
    <>
      <FormStyled>
        <SelectStyled id="ano" value={filter} onChange={handlechange}>
          {anos.map((a) => (
            <option value={a} key={a}>
              {a}
            </option>
          ))}
        </SelectStyled>
      </FormStyled>
    </>
  );
}
