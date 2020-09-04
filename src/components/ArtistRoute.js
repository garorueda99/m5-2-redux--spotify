import React from 'react';
import { useSelector } from 'react-redux';

export default function ArtistRoute() {
  const accessToken = useSelector((state) => state);
  console.log(accessToken);
  return <div>HELLO ARTIST!!!! </div>;
}
