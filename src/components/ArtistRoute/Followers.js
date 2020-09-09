import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';

export default function Followers({ children }) {
  return <P>{format(children)}</P>;
}

const P = styled.p`
  margin-top: 23px;
  font-style: normal;
  font-weight: 600;
  color: ${COLORS.primary};
  font-size: 14px;
  &::after {
    color: ${COLORS.white};
    content: ' followers';
  }
`;

const format = (follower) => {
  switch (true) {
    case follower / 1000 < 999:
      return `${Math.round(follower / 1000)}K`;
    case follower / 1000000 < 999:
      return `${Math.round(follower / 1000000)}M`;
    default:
      return follower;
  }
};
