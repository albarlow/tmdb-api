# tmdb-api
Demo of using API calls on TMDB

# Development Ideas
- Checkout the displayMovie() function in helpers.js to use the DOM to rearrange the layout of information on the page. Try displaying different types of information like cast, or release date.
- Create a way to store a user’s liked and disliked movies and display this list on the page.
- Our API call inside of getMovies() returns many pages of results, but currently our program only randomizes results from the first page. To randomize our results even more, update getMovies() so that movies contains results from a random page instead of the first page.