import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './services/Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState();
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o Featured
      const originals = list.filter((i) => i.slug === 'originals');
      const randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  const handleFeatureData = async (item) => {
    const it = await Tmdb.getMovieInfo(item.id, item.media_type);
    setFeaturedData(it);
  }

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY> 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll',scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} change={handleFeatureData}/>
        ))}
      </section>

      <footer>
        Feito apenas para estudo <br />
        Direitos de imagem para Netflix <br/>
        Datos obtidos no site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
      </div>
    }
    </div>
  );
};
