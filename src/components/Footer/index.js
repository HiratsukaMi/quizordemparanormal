import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://ordemparanormal.fandom.com/wiki/Ordem_Paranormal_Wiki">
        <img src="https://ordemparanormal.com.br/wp-content/uploads/2021/07/S3Fmbolo_Maior_ocultista-1-1-1024x1005.png" alt="Logo Ordem Paranormal" />
      </a>
      <p>
        Quiz criado por:
        {' '}
        <a href="https://twitter.com/HiraMiDev">@HiraMiDev</a>
        {' '}
        <br />
        {' '}
        Background por:
        {' '}
        <a href="https://twitter.com/najulia_k">@najulia_k</a>
      </p>
    </FooterWrapper>
  );
}
