
export const PORT = 3005;

export const BASE_URL = `http://localhost:${PORT}`; 
export const BASE_API_URL = `${BASE_URL}/api/v1`;
export const BASE_AUTH_URL = `${BASE_API_URL}/auth`;
export const BASE_MOVIE_URL = `${BASE_API_URL}/movies`;


export const HEADERS = {
  "Content-Type": "application/json",
};

export const CUSTOM_STATUS_CODES = {
  OK: 200,
  CREATED: 201,

};