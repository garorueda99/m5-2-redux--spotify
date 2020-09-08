import React from 'react';
import styled from 'styled-components';

export default function Title({ children }) {
  return <H1>{children}</H1>;
}

const H1 = styled.h1`
  position: absolute;
  top: 21.305%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
`;
