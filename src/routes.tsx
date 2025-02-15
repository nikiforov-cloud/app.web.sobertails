import { Navigate, RouteObject } from 'react-router-dom';
import ContentPage from '@/pages/ContentPage/ContentPage.tsx';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage.tsx';
import { ITEMS } from '@/utils/items.ts';

const routes = [
  {
    path: '/',
    element: <Navigate to={`/${ITEMS[0]}`} replace />,
  },
  ...ITEMS.map((item) => ({
    path: `/${item}`,
    element: <ContentPage item={item} />,
  })),
  {
    path: '*',
    element: <NotFoundPage />,
  },
] as RouteObject[];

export default routes;
