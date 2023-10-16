import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import Banner2 from '../components/Banner2';
import Loading from '../components/Loading';
import MovieSlide2 from '../components/MovieSlide2';

const Movies = () => {
  const dispatch = useDispatch();
  const { popularPeople, loading } = useSelector(state => state.people);
  console.log("home", popularPeople)

  useEffect(() => {
    dispatch(movieAction.getPeople());
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      {<Banner2 people={popularPeople.results[8]} />}
      <div className='contents'>
        <h2>What's People</h2>
        <MovieSlide2 people={popularPeople} />
      </div>
    </div>
  )
}

export default Movies
