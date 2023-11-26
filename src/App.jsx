import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NoticesPage />
      </Suspense>
    </>
  );
};
