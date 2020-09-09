import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { imageSize } from '../../theme';
const current = 'small';

export default function RelatedArtists() {
  const relatedArtist = useSelector((state) => state.artists.related);
  console.log(relatedArtist);
  return (
    <Wrapper>
      related artists
      <Nav>
        {relatedArtist.map((element) => {
          return (
            <Card>
              <Img
                style={{
                  backgroundImage: `url(${element.images[0].url})`,
                }}
              />
              <Artist>{element.name}</Artist>
            </Card>
          );
        })}
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  width: 100vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
`;

const Card = styled.div`
  width: 60px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Artist = styled.div`
  flex: 1;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: center;
`;

const Img = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: ${imageSize[current]}px;
  width: ${imageSize[current]}px;
  border-radius: 50%;
`;
