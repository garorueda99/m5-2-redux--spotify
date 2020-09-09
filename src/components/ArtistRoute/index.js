import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  fetchArtistProfile,
  fetchArtistTopTracks,
} from '../../helpers/api-helpers';
import { useParams } from 'react-router-dom';
import {
  receiveArtistInfo,
  receiveArtistInfoError,
  receiveArtistAlbums,
} from '../../actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import MainImage from './MainImage';
import Title from './Title';
import Followers from './Followers';
import Tags from './Tags';
import TopTracks from './TopTracks';

export default function ArtistRoute() {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const accessToken = useSelector((state) => state.auth.token);
  const artist = useSelector((state) => state.artists.currentArtist);
  const tracks = useSelector((state) => state.artists.currentArtistAlbums);
  useEffect(() => {
    if (!accessToken) {
      return;
    }
    const promise1 = fetchArtistProfile(accessToken, artistId)
      .then((data) => dispatch(receiveArtistInfo(data)))
      .catch((err) => dispatch(receiveArtistInfoError(err)));
    const promise2 = fetchArtistTopTracks(accessToken, artistId).then((data) =>
      dispatch(receiveArtistAlbums(data.tracks.slice(0, 3)))
    );
    Promise.all([promise1, promise2]).then((values) =>
      console.log('========>', values[1])
    );
  }, [accessToken]);
  return (
    <>
      {artist !== null ? (
        <Wrapper>
          <Screen>
            <MainImage url={artist.images[0].url} name={artist.name} />
            <Title>{artist.name}</Title>
            <Followers>{artist.followers.total}</Followers>
            {tracks !== null ? <TopTracks tracks={tracks} /> : 'LOADING'}
            <Tags elements={artist.genres.slice(0, 2)} />
          </Screen>
        </Wrapper>
      ) : (
        'LOADING'
      )}
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${COLORS.charcoal};
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${COLORS.white};
`;

const Screen = styled.div`
  background-color: ${COLORS.charcoal};
  min-height: 100%;
  width: 375px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.white};
`;
