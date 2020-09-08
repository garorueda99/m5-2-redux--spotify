import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchArtistProfile } from '../helpers/api-helpers';
import { useParams } from 'react-router-dom';
import { receiveArtistInfo, receiveArtistInfoError } from '../actions';
import { useDispatch } from 'react-redux';

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
        <div>
          <img src={artist.images[0].url} alt={`${artist.name} images`} />
          <h1>{artist.name}</h1>
          <p>{format(artist.followers.total)}</p>
          {artist.genres.slice(0, 2).map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ) : (
        'LOADING'
      )}
    </>
  );
}

const format = (follower) => {
  switch (true) {
    case follower / 1000 < 999:
      return `${Math.round(follower / 1000)}K`;
    case follower / 1000000 < 999:
      return `${Math.round(follower / 1000000)}M`;
  }
};
