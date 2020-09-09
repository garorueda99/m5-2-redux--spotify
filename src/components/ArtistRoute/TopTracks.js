import React, { useState } from 'react';
import styled from 'styled-components';
import PlayButton from 'react-play-button';
import { COLORS } from '../../theme';

export default function TopTracks({ tracks }) {
  console.log('hello ==>', tracks[0].preview_url);
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);
  const [play3, setPlay3] = useState(false);
  return (
    <Wrapper>
      <div>top tracks</div>
      <div style={{ marginTop: '26px' }}>
        <Button
          onClick={() => {
            setPlay1((n) => !n);
            setPlay2(false);
            setPlay3(false);
          }}
        >
          <PlayButton
            url={tracks[0].preview_url}
            progressCircleColor={COLORS.primary}
            active={play1}
          />
        </Button>
        <Button
          onClick={() => {
            setPlay1(false);
            setPlay2((n) => !n);
            setPlay3(false);
          }}
        >
          <PlayButton
            url={tracks[1].preview_url}
            progressCircleColor={COLORS.primary}
            active={play2}
          />
        </Button>
        <Button
          onClick={() => {
            setPlay1(false);
            setPlay2(false);
            setPlay3((n) => !n);
          }}
        >
          <PlayButton
            url={tracks[2].preview_url}
            progressCircleColor={COLORS.primary}
            active={play3}
          />
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 41.626%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 50%;
`;
