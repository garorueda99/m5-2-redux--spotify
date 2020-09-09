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
  margin-top: 5px;
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
  position: relative;
  display: flex;
  justify-content: space-around;
  min-width: 80%;
`;
const Tag = styled.li`
  position: relative;
  padding: 8px 15px;
  background-color: ${COLORS.grayfade};
  border-radius: 4px;
  list-style-type: none;
  clip-path: polygon(10px 0px, 100% 0px, 100% 100%, 0% 100%, 0% 10px);
  &::before {
    content: '';
    top: 0;
    left: 0;
    color: white;
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${COLORS.grayfade};
    clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%, 0% 0px);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 4px 0;
  }
`;
