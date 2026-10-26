import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollManager from './components/ScrollManager.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Legal, { legalRoutes } from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';
import { site } from './config.js';

export default function App() {
  useEffect(() => {
    document.title = site.title;
  }, []);

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {legalRoutes.map(([path, page]) => (
            <Route key={path} path={path} element={<Legal page={page} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
