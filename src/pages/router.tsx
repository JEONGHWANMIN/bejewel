import { createBrowserRouter } from 'react-router-dom';
import Detail from './Detail';
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
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '/edit/:id',
    element: <Edit />,
  },
]);
