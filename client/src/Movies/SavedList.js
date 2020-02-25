import React from 'react';
import { Route } from 'react-router-dom';
import MovieList from './MovieList';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Route path to="/" component={MovieList}>
      <div className="home-button">Home</div>
    </Route>
  </div>
);

export default SavedList;
