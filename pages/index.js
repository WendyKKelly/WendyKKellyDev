import React, { Fragment } from 'react';
import Head from 'next/head';
//import Image from 'next/image';
import Link from 'next/link';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme/portfolio';
import { GlobalStyle, ContentWrapper } from '../components/portfolio.style';
//import  SkillSection from '../components/Skill';
//import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
//import Introduction from '../components/Introduction';
import PortfolioShowcase from '../components/PortfolioShowcase';
//import Newsletter from '../components/Newsletter';
//import Podcast from '../components/Podcast';

//import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Wendy K Kelly Dev</title>
          <meta name="theme-color" content="#FF825C" />
          <meta name="Description" content="Wendy K Kelly" />
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
          <Banner />
          <PortfolioShowcase />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
}
