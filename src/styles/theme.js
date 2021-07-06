const margins = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const paddings = {
  sm: ".5rem",
  base: "1.5rem",
  lg: "2rem",
  xl: "3rem",
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
  },
  size: {
    sm: "1.3rem",
    base: "1.5rem",
    md: "1.8rem",
    lg: "2rem",
    xl: "2.5rem",
    title: "6rem",
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  default: "#333",
  white: "#fff",
  lightgray: "#f5f5f5",
  gray: "#999",
  primary: "#1E37DD",
  lightprimary: "#E8EAFC",
  danger: "#E83737",
  lightdanger: "#E83737",
  success: "#84D85D",
  warning: "#FF8924",
  lightwarning: "#FFF6E3",
};

const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

// 공통으로 사용되는 변수들입니다
const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
  colors,
};

export const lightTheme = {
  ...defalutTheme,
};
