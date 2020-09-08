import React from 'react';
import styled from 'styled-components';
import { imageSize } from '../../theme';
const current = 'mobile';

export default function MainImage({ url, name }) {
  return (
    <Img
      style={{
        backgroundImage: `url(${url})`,
      }}
    />
  );
}

const Img = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 7.266%;
  height: ${imageSize[current]}px;
  width: ${imageSize[current]}px;
  border-radius: 50%;
  border: 2px solid purple;
`;
