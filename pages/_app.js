import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" type="imagex/png" href="../img/icon.ico" />
        {/* Primary Meta Tags */}
        <title>Quiz Ordem Paranormal</title>
        <meta name="title" content="Quiz Ordem Paranormal" />
        <meta name="description" content="Teste os seus conhecimentos sobre Ordem Paranormal!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quizordemparanormal.vercel.app/" />
        <meta property="og:title" content="Quiz Ordem Paranormal" />
        <meta property="og:description" content="Teste os seus conhecimentos sobre Ordem Paranormal!" />
        <meta property="og:image" content="https://ordemparanormal.com.br/wp-content/uploads/2021/07/S3Fmbolo_Maior_ocultista-1-1-1024x1005.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quizordemparanormal.vercel.app/" />
        <meta property="twitter:title" content="Quiz Ordem Paranormal" />
        <meta property="twitter:description" content="Teste os seus conhecimentos sobre Ordem Paranormal!" />
        <meta property="twitter:image" content="https://ordemparanormal.com.br/wp-content/uploads/2021/07/S3Fmbolo_Maior_ocultista-1-1-1024x1005.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
