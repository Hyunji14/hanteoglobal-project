import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  ChargePage,
  ChartPage,
  EventsPage,
  NewsPage,
  StorePage,
  WhookPage,
  NotFoundPage,
} from './pages';

import Layout from './components/Layout/Layout';
import { PATH } from './global/constants';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: PATH.main, element: <ChartPage /> },
      {
        path: PATH.charge,
        element: <ChargePage />,
      },
      {
        path: PATH.events,
        element: <EventsPage />,
      },
      {
        path: PATH.news,
        element: <NewsPage />,
      },
      {
        path: PATH.store,
        element: <StorePage />,
      },
      {
        path: PATH.whook,
        element: <WhookPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
