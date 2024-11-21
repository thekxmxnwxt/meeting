import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import movieData from '../data/MovieData';  // นำเข้า movieData จาก MovieData.js
import '../style/MovieSelection.css';

const MovieSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOptionMovie, setSelectedOptionMovie] = useState(null);

  const handleSelection = (event) => {
    setSelectedOptionMovie(event.target.value);
  };

  const handleNext = () => {
    if (selectedOptionMovie) {
      navigate('/summary', {
        state: { 
          date: location.state.date, 
          restaurant: location.state.restaurant, 
          movie: selectedOptionMovie,
        },
      });
    } else {
      alert('Please select a movie!');
    }
  };

  return (
    <div className="movie-selection-container">
      <h1 className="title">The Movie We Will Watch</h1>

      <div className="movie-options">
        {movieData.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <img
              src={movie.image}
              alt={movie.title}
              className="movie-image"
            />
            <label>
              <input
                type="radio"
                name="movie"
                value={movie.description}  // ใช้ชื่อภาพยนตร์เป็นค่าของ radio
                checked={selectedOptionMovie === movie.description}
                onChange={handleSelection}
              />
              {movie.title} - {movie.description}
            </label>
          </div>
        ))}
      </div>

      <button className="date-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default MovieSelection;
