import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import { Container } from "../styles/styles";

const Wrap = styled.div`
  background: #fff;
`;
function Layout({ children }) {
  return (
    <>
      <Wrap>
        <Header />
        <Nav />
        <Container>{children}</Container>
      </Wrap>
    </>
  );
}

export default Layout;
