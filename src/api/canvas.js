import { canvasHttpClient } from './http';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export async function getCanvases(params) {
  const payload = Object.assign(
    {
      _sort: 'lastModified',
      _order: 'desc',
    },
    params
  );
  const { data } = await canvasHttpClient.get('/', { params: payload });
  return data;
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

export async function getCanvasById(id) {
  const { data } = await canvasHttpClient.get(`/${id}`);
  return data;
}

export async function updateTitle(id, title) {
  await canvasHttpClient.patch(`/${id}`, { title });
}

export async function updateCanvas(id, canvas) {
  await canvasHttpClient.put(`/${id}`, canvas);
}
