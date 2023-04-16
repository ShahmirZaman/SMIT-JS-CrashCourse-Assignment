(async function() {
    
    const response = await fetch("./data.json");
    const movies = await response.json();
  
    
    const genreSelect = document.getElementById("genre");
    const yearSelect = document.getElementById("year");
    const ratingSelect = document.getElementById("rating");
    const submitButton = document.getElementById("submit");
    const movieList = document.getElementById("movie-list");
  
    
    function generateMovieListItem(movie) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h2>${movie.title}</h2>
        <ul>
          <li><strong>Genre:</strong> ${movie.genre}</li>
          <li><strong>Year:</strong> ${movie.year}</li>
          <li><strong>Rating:</strong> ${movie.rating}</li>
        </ul>
      `;
      return listItem;
    }
  
    
    function filterMovies() {
      const selectedGenre = genreSelect.value;
      const selectedYear = yearSelect.value;
      const selectedRating = ratingSelect.value;
  
      const filteredMovies = movies.filter(function(movie) {
        return (
          (selectedGenre === "All" || movie.genre === selectedGenre) &&
          (selectedYear === "All" || movie.year === selectedYear) &&
          (selectedRating === "All" || movie.rating === selectedRating)
        );
      });
  
      return filteredMovies;
    }
  
    
    function displayMovieRecommendations() {
      const filteredMovies = filterMovies();
      movieList.innerHTML = "";
      if (filteredMovies.length === 0) {
        movieList.innerHTML = "<li>No movies found.</li>";
      } else {
        filteredMovies.forEach(function(movie) {
          const listItem = generateMovieListItem(movie);
          movieList.appendChild(listItem);
        });
      }
    }
  
  
    submitButton.addEventListener("click", displayMovieRecommendations);
  
    
    displayMovieRecommendations();
  })();
  