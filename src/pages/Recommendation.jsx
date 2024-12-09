import { useState, useEffect } from "react";
import "./Recommendation.css";

export default function Recommendation() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = '7f899281admshc601218f1934c56p172cd8jsn86a31ad171bf';
  const apiHost = 'imdb-top-100-movies.p.rapidapi.com';
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': apiHost,
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Full response:', result); // Debugging API response

        if (result && Array.isArray(result)) {
          // Extract and set the data for the top 100 movies
          const topMovies = result.map(movie => ({
            title: movie.title,
            year: movie.year,
            imdbRating: movie.imdbRating,
            poster: movie.poster, // Image URL if available
          }));
          setMovies(topMovies);
        } else {
          console.log('Unexpected API response format:', result);
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setMovies([]); // Set movies to an empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="navbar">
        <h1 className="navbar-heading">Super App</h1>
        <img src="/Image/avatar.png" alt="Avatar" className="navbar-avatar" />
      </div>
      <h2>Top 100 Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.length === 0 ? (
            <p>No movies found. Please try again later.</p>
          ) : (
            <div className="movie-section">
              {movies.map((movie, idx) => (
                <div key={idx} className="movie-card">
                  <img src={movie.poster} alt={movie.title} className="movie-poster" />
                  <div className="movie-info">
                    <h4>{movie.title}</h4>
                    <p>Year: {movie.year}</p>
                    <p>IMDB Rating: {movie.imdbRating}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
