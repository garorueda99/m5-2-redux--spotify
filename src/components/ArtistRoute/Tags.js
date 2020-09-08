import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';

export default function Tags({ elements }) {
  return (
    <Wrapper>
      <H2>tags</H2>
      <ul>
        {elements.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 58.867%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const H2 = styled.h2`
  font-size: 21px;
  line-height: 26px;
`;
const Tag = styled.li`
  padding: 8px 15px;
  background-color: ${COLORS.grayfade};
  border-radius: 4px;
  list-style-type: none;
`;
