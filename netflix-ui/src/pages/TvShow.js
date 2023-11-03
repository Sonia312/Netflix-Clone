import React from 'react' 
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from "../store"
import TopNav  from "../components/TopNav"
import CardSlider from "../components/CardSlider"
import NotAvailable from "../components/NotAvailable"
import { onAuthStateChanged} from 'firebase/auth'
import styled from 'styled-components'
import { firebaseAuth } from '../utils/firebase-config'
import SelectGenre from "../components/SelectGenre";
import SliderContainer from '../components/SliderContainer';

const TVShow = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "tv" }));
    }
  }, [genresLoaded]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser.uid);
    else navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [user, setUser] = useState(undefined);

  const getMoviesBetween = (start, end)=>{
    return movies.slice(start, end)
}

  return (
    <Container>
      <div className="navbar">
        <TopNav isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? <SliderContainer movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data{
    margin-top: 8rem;
    .not-available{
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default TVShow