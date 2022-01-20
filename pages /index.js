import React, { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/portfolio';
import {
  GlobalStyle,
  ContentWrapper,
} from '../components/Portfolio/portfolio.style';
import { DrawerProvider } from '../components/DrawerContext';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';



import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Wendy Kelly Dev</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="Wendy Kelly Dev" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@100;300;400;500;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <NavBar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
}
