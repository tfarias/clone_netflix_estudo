import React, { useState } from 'react';
import { Container, ListArea, MovieRowList, MovieRowItem, MovieRowIcons } from './styles';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

function MovieRow({title, items, change}) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;

    if((window.innerWidth - listW) > x ){
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }


  return (
    <Container>
        <h2>{title}</h2>
        <MovieRowIcons>
          <div onClick={handleLeftArrow}>
            <NavigateBefore style={{fontSize: 50}} />
          </div>
          <div onClick={handleRightArrow}>
            <NavigateNext style={{fontSize: 50}} />
          </div>
        </MovieRowIcons>

        <ListArea>
          <MovieRowList left={scrollX} width={items.results.length * 150 }>
            {items.results.length > 0 && items.results.map((item,key) => (
              <MovieRowItem key={key} onClick={() => change(item)}>
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
              </MovieRowItem>
            ))}
          </MovieRowList>

        </ListArea>
    </Container>
  );
}

export default MovieRow;
