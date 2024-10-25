import { canvasHttpClient } from './http';

export function getCanvases(params) {
  return canvasHttpClient.get('/', { params });
}
