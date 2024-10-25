import { canvasHttpClient } from './http';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export function getCanvases(params) {
  return canvasHttpClient.get('/', { params });
}

export function createCanvas() {
  const newCanvas = {
    title: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    lastModified: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    category: '신규',
  };
  return canvasHttpClient.post('/', newCanvas);
}

export async function deleteCanvas(id) {
  await canvasHttpClient.delete(`/${id}`);
}
