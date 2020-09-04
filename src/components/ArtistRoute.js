import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchArtistProfile } from '../helpers/api-helpers';
import { useParams } from 'react-router-dom';

export default function ArtistRoute() {
  const { artistId } = useParams();
  const accessToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (!accessToken) {
      return;
    }
    fetchArtistProfile(accessToken, artistId).then((data) => console.log(data));
  }, [accessToken]);

  return <div>HELLO ARTIST!!!! {accessToken}</div>;
}
