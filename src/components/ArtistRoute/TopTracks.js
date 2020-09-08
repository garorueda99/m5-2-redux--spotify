import React from 'react';
import styled from 'styled-components';
import PlayButton from 'react-play-button';
import { COLORS } from '../../theme';

export default function TopTracks({ tracks }) {
  console.log(tracks[0].preview_url);
  return (
    <Wrapper>
      <div>top tracks</div>
      <div style={{ marginTop: '26px' }}>
        <PlayButton
          url={tracks[0].preview_url}
          progressCircleColor={COLORS.primary}
        />
        {/* <PlayButton /> */}
        {/* <PlayButton /> */}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 41.626%;
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
`;
