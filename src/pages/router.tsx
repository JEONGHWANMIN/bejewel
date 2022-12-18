import { createBrowserRouter } from 'react-router-dom';
import Edit from './Edit';
import Enroll from './Enroll';
import Home from './Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/enroll',
    element: <Enroll />,
  },
  {
    path: '/edit/:id',
    element: <Edit />,
  },
]);
