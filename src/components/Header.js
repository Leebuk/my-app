import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #eee;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: white;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    &:hover {
    }
  }
`;

function Header({ title }) {
  return (
    <>
      <SHeader>
        <Wrapper>{title}</Wrapper>
      </SHeader>
    </>
  );
}
export default Header;
