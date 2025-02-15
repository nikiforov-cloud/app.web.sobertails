import { useRoutes } from 'react-router-dom';
import routes from '@/routes.tsx';
import './Pages.scss';

const Pages = () => {
  return <div className="Pages">{useRoutes(routes)}</div>;
};

export default Pages;
