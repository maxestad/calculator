import styled, { createGlobalStyle } from 'styled-components';

import { COLORS } from '../constants';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    height: 100%;
    background-color: ${COLORS.blue2};
  }

  #__next {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

`;

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Layout = ({ children }) => (
  <Container>
    <GlobalStyle />

    {children}
  </Container>
);

export default Layout;
