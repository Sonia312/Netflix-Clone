import React  from 'react'
import styled  from 'styled-components'
import CardSlider from './CardSlider'

const SliderContainer = ({movies}) => {
    
    const getMoviesBetween = (start, end) => {
      console.log(movies.slice(start, end));
      return movies.slice(start, end);
    }
      

    return (
       <SliderWrapper>
        <CardSlider data = {getMoviesBetween(0,10)} title="Only On Netflix" />
        <CardSlider data = {getMoviesBetween(10,20)} title="Trending Now" />
        <CardSlider data = {getMoviesBetween(20,30)} title="Popular On Netflix " />
        <CardSlider data = {getMoviesBetween(30,40)} title="Best of 2023" />
        <CardSlider data = {getMoviesBetween(40,50)} title="Epic" />
        <CardSlider data = {getMoviesBetween(50,60)} title="New Releases" />
       </SliderWrapper>
    )
}
const SliderWrapper = styled.div` 


`
export default SliderContainer