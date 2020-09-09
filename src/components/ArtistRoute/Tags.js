import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';

export default function Tags({ elements }) {
  return (
    <Wrapper>
      <H2>tags</H2>
      <Ul>
        {elements.map((item, index) => (
          <Tag key={index}>{item}</Tag>
        ))}
      </Ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 58.867%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 21px;
  line-height: 26px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  min-width: 80%;
`;
const Tag = styled.li`
  padding: 8px 15px;
  background-color: ${COLORS.grayfade};
  border-radius: 4px;
  list-style-type: none;
`;
