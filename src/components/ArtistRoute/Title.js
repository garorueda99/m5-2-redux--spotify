import React from 'react';
import styled from 'styled-components';

export default function Title({ children }) {
  return <H1>{children}</H1>;
}

const H1 = styled.h1`
  margin-top: 173px;
  z-index: 1;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  width: 100%;
`;
