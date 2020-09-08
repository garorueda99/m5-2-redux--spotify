import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchArtistProfile } from '../helpers/api-helpers';
import { useParams } from 'react-router-dom';
import { receiveArtistInfo, receiveArtistInfoError } from '../actions';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../theme';

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
          <img src={artist.images[0].url} alt={`${artist.name} images`} />
          <h1>{artist.name}</h1>
          <p>{format(artist.followers.total)}</p>
          {artist.genres.slice(0, 2).map((item, index) => (
            <div key={index}>{item}</div>
          ))}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.white};
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
