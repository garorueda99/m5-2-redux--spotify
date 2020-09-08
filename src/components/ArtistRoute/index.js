import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchArtistProfile } from '../../helpers/api-helpers';
import { useParams } from 'react-router-dom';
import { receiveArtistInfo, receiveArtistInfoError } from '../../actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../theme';
import MainImage from './MainImage';
import Title from './Title';
import Followers from './Followers';
import Tags from './Tags';

export default function ArtistRoute() {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const accessToken = useSelector((state) => state.auth.token);
  const artist = useSelector((state) => state.artists.currentArtist);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    fetchArtistProfile(accessToken, artistId)
      .then((data) => dispatch(receiveArtistInfo(data)))
      .catch((err) => dispatch(receiveArtistInfoError(err)));
  }, [accessToken]);
  return (
    <>
      {artist !== null ? (
        <Wrapper>
          <MainImage url={artist.images[0].url} name={artist.name} />
          <Title>{artist.name}</Title>
          <Followers>{artist.followers.total}</Followers>
          <div>Top Tracks</div>
          <Tags elements={artist.genres.slice(0, 2)} />
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
  align-items: center;
  color: ${COLORS.white};
`;
