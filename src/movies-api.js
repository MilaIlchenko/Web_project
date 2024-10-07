import axios from "axios";

// API token for The Movie Database (TMDb)
const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDViZWNmNTE4NzBmYzNhNzgwN2E1NmRhN2QzMmM4ZSIsInN1YiI6IjY2NGIzZGNmNjU2ZjRjYjhmYWYyYWU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQcyYTAGY5j0CMV1-a4Q4YGsX1Zxtqj9wLwOw0WWiN8";

// Set base URL for all axios requests
axios.defaults.baseURL = "https://api.themoviedb.org";

// Add Authorization header with Bearer token to every request
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${apiToken}`;
  return config;
});

// Function to get trending movies for the day
export const getMovies = async () => {
  const response = await axios.get("3/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

// Function to search movies based on a query
export const getMoviesSearch = async (searchQuery) => {
  const response = await axios.get("3/search/movie", {
    params: {
      query: searchQuery,
      language: "en-US",
    },
  });
  return response.data.results;
};

// Function to get details of a specific movie by ID
export const getMovieId = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

// Function to get credits (cast & crew) of a specific movie by ID
export const getMovieIdCredits = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

// Function to get reviews of a specific movie by ID
export const getMovieIdReviews = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};