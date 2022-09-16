const tmdbKey = '';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = '?api_key=' + tmdbKey;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;
  try {
    response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json()
      console.log(jsonResponse);
      const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const movieDiscoverEndpoint = '/discover/movie'
  const requestParams = '?api_key=' + tmdbKey
   + '&with_genres=' + selectedGenre;
  const urlToFetch = tmdbBaseUrl + movieDiscoverEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      const movies = jsonResponse.results;
      //onsole.log(movies)
      return movies;
    }
    throw new Error('Request Failed!')
  } catch(error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieDetailsEndpoint = '/movie/' + movieId;
  const requestParams = '?api_key=' + tmdbKey
  const urlToFetch = tmdbBaseUrl + movieDetailsEndpoint + requestParams;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const movieInfo = await response.json()
      return movieInfo;
    }
    throw new Error('Request Failed!');
  } catch(error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  console.log('1');
  const movies = await getMovies();
  console.log('2');
  const randomMovie = getRandomMovie(movies);
  console.log('3');
  const info = await getMovieInfo(randomMovie);
  console.log('4');
  displayMovie(info);
  console.log('5');
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
