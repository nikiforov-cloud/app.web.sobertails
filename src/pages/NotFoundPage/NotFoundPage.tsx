import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={'NotFoundPage'}>
      <h1>404 — Page not found</h1>
      <Link to="/">Return to homepage</Link>
    </div>
  );
};

export default NotFoundPage;
