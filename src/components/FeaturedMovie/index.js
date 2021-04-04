import React from 'react';

import {
  Container,
  NameFetured,
  FeaturedInfo,
  FeaturedPoints,
  FeaturedYear,
  FeaturedSeason,
  FeaturedDescription,
  FeturedVertical,
  FeturedHorizontal,
  FeaturedGenres,
  FeaturedButtons,
} from './styles';

function FeaturedMovie({ item }) {

  let firstDate = new Date(item.first_air_date);

  let genres = [];

  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }

  return (
    <Container img={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}>
      <FeturedVertical>
        <FeturedHorizontal>
          <NameFetured>{item.original_name}</NameFetured>

          <FeaturedInfo>
            <div>
              {item.vote_average}
              pontos
            </div>
            <div>{firstDate.getFullYear()}</div>
            <div>
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </FeaturedInfo>

          <FeaturedDescription>
            {item.overview}
          </FeaturedDescription>

          <FeaturedButtons>
            <a href={`/watch/${item.id}`}>► Assistir</a>
            <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </FeaturedButtons>

          <FeaturedGenres>
              <strong>Gêneros:</strong> {genres.join(', ')}
          </FeaturedGenres>

        </FeturedHorizontal>
      </FeturedVertical>
    </Container>
  );
}

export default FeaturedMovie;
