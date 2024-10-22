import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CanvasDetail from './pages/CanvasDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/canvases/:id', element: <CanvasDetail /> },
    ],
  },
]);
