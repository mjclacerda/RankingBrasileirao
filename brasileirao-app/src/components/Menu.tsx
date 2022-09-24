import styled from "styled-components";

interface IMenu {
  title: string;
}

const DivStyled = styled.menu`
  text-align: center;
  font-size: 25px;
  color: white;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  background-image: linear-gradient(to right, #06ab27, #0048ff);
  height: 42px;
  border-top: 2px;
  padding-top: 8px;
`;

export default function Menu({ title }: IMenu) {
  return <DivStyled>{title}</DivStyled>;
}
