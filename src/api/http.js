import axios from 'axios';

function createHttpClient(baseURL, options) {
  const instance = axios.create({
    baseURL,
    ...options,
  });
  return instance;
}

export const canvasHttpClient = createHttpClient(
  'http://localhost:8000/canvases'
);
