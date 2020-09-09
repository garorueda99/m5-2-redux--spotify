import React, { useState } from 'react';
import styled from 'styled-components';
import PlayButton from 'react-play-button';
import { COLORS } from '../../theme';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function TopTracks({ tracks }) {
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);
  const [play3, setPlay3] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(open);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setPlay1(false);
    setPlay2(false);
    setPlay3(false);
  };

  return (
    <Wrapper>
      <div>top tracks</div>
      <div style={{ marginTop: '26px' }}>
        <Button
          onClick={() => {
            setPlay1((n) => !n);
            setPlay2(false);
            setPlay3(false);
            !tracks[0].preview_url && setOpen(true);
          }}
        >
          <PlayButton
            url={tracks[0].preview_url}
            progressCircleColor={COLORS.secondary}
            playIconColor={COLORS.secondary}
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
            progressCircleColor={COLORS.secondary}
            playIconColor={COLORS.secondary}
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
            progressCircleColor={COLORS.secondary}
            playIconColor={COLORS.secondary}
            active={play3}
          />
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="warning">
          There isn't a preview available for this artist
        </MuiAlert>
      </Snackbar>
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
