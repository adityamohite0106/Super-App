import React from 'react';

function MovieGrid({ selected, setSelected, movie }) {
  const handleClick = () => {
    if (selected.includes(movie.value)) {
      setSelected(selected.filter((item) => item !== movie.value));
    } else {
      setSelected([...selected, movie.value]);
    }
  };

  return (
    <div
      className={`grid-item ${selected.includes(movie.value) ? 'selected' : ''}`}
      onClick={handleClick}
      style={{ background: movie.background }}
    >
          <p className='movie-name'>{movie.label}</p>
      <img src={movie.image} alt={movie.label} className='movie-img'/>
    
    </div>
  );
}

export default MovieGrid;
