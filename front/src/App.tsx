import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainPage, CategoryPage, NotFoundPage } from './feature';

import Layout from './components/Layout/Layout';
import { PATH } from './global/constants';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: PATH.main, element: <MainPage /> },
      { path: PATH.category(':categoryId'), element: <CategoryPage /> },
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
