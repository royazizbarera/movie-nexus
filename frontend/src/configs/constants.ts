const NodeEnv = {
  development: "development",
  production: "production",
};

const NODE_ENV = process.env.NODE_ENV || NodeEnv.production;

export const PORT = 3005;

export const BASE_URL =
  NODE_ENV === NodeEnv.production
    ? "https://movie-nexus-backend.vercel.app"
    : `http://localhost:${PORT}`;

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

export const PAGE_SIZE_DROPDOWN = [12, 24, 48, 96];
export const DEFAULT_PAGE_SIZE = 24;
export const SORT_ORDER_DROPDOWN = ["asc", "desc"];
