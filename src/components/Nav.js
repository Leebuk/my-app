import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import routes from "../routes";

const SNav = styled.nav`
  ${({ theme }) => {
    return css`
      font-size: 14px;
      width: 100%;
      border-top: solid 1px #eee;
      border-bottom: solid 1px #eee;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      ::-webkit-scrollbar {
        display: none;
      }
      ul {
        display: flex;
        justify-content: space-between;
        li {
          flex: 1 0 20%;
          text-align: center;
          flex-shrink: 0;
          a {
            display: inline-flex;
            height: 40px;
            line-height: 40px;
            border-bottom: solid 2px #fff;
            color: #000;
            &:hover,
            &:focus,
            &:active {
              border-bottom: solid 2px #1e37dd;
            }
          }
        }
      }
    `;
  }}
`;

function Nav() {
  return (
    <>
      <SNav>
        <ul>
          <li>
            <Link to={routes.home}>홈</Link>
          </li>
          <li>
            <Link to={routes.page}>페이지</Link>
          </li>
          <li>
            <Link to={routes.board}>게시판</Link>
          </li>
        </ul>
      </SNav>
    </>
  );
}
export default Nav;
