import Nav from "./nav";
import styled from "styled-components";

const StyledHeader = styled.header`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
}
