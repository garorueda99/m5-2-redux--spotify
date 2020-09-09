import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  fetchArtistProfile,
  fetchArtistTopTracks,
  fetchRelatedArtists,
} from '../../helpers/api-helpers';
import { useParams } from 'react-router-dom';
import {
  requestAllArtistInfo,
  receiveArtistInfo,
  receiveArtistInfoError,
  receiveArtistAlbums,
  finishingReceivingAllArtistInfo,
  receiveRelatedArtist,
} from '../../actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import MainImage from './MainImage';
import Title from './Title';
import Followers from './Followers';
import Tags from './Tags';
import TopTracks from './TopTracks';
import RelatedArtists from './RelatedArtists';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function ArtistRoute() {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const accessToken = useSelector((state) => state.auth.token);
  const artist = useSelector((state) => state.artists.currentArtist);
  const status = useSelector((state) => state.artists.status);
  const tracks = useSelector((state) => state.artists.currentArtistAlbums);
  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(requestAllArtistInfo());
    const promise1 = fetchArtistProfile(accessToken, artistId).then((data) =>
      dispatch(receiveArtistInfo(data))
    );
    const promise2 = fetchArtistTopTracks(accessToken, artistId).then((data) =>
      dispatch(receiveArtistAlbums(data.tracks.splice(0, 3)))
    );
    const promise3 = fetchRelatedArtists(accessToken, artistId).then((data) =>
      dispatch(receiveRelatedArtist(data.artists))
    );

    Promise.all([promise1, promise2, promise3]).then((values) =>
      dispatch(finishingReceivingAllArtistInfo())
    );
  }, [accessToken]);
  return (
    <>
      <Wrapper>
        {status === 'loaded' ? (
          <Screen>
            <MainImage url={artist.images[0].url} name={artist.name} />
            <Title>{artist.name}</Title>
            <Followers>{artist.followers.total}</Followers>
            {tracks !== null ? <TopTracks tracks={tracks} /> : 'LOADING'}
            <Tags elements={artist.genres.slice(0, 2)} />
            <RelatedArtists />
          </Screen>
        ) : (
          <Loader color={COLORS.primary} />
        )}
      </Wrapper>
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
  align-items: center;
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
