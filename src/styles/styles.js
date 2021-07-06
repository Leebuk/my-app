import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const Container = styled.div`
  ${({ theme }) => {
    const { colors, device } = theme;
    return css`
      background-color: ${colors.lightgray};
      max-width: 1200px;
      margin: 0 auto;
      ${device.tablet} {
        background-color: ${colors.primary};
      }
    `;
  }}
`;
export const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing:border-box;
    }
    html {
      font-size: 62.5%; //1rem = 10px;
    }
    input {
        all:unset;
    }

    ${({ theme }) => {
      return css`
        body {
          font-family: ${theme.fonts.family.base};
          font-weight: ${theme.fonts.weight.normal};
          font-size: ${theme.fonts.size.base};
        }
        button,
        a {
          border: 0;
          text-decoration: none;
        }
        img {
          max-width: 100%;
        }
      `;
    }}
`;
