import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import SEO from 'components/SEO/SEO';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

export const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <SEO />
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
