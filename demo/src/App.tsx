import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { WorkPage } from './pages/Work';
import { AboutPage } from './pages/About';
import { JournalPage } from './pages/Journal';

const LOADER_KEY = 'demo-portfolio-loaded';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="journal" element={<JournalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  const [ready, setReady] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem(LOADER_KEY) === '1',
  );
  const [showLoader, setShowLoader] = useState(!ready);

  const onLoaderComplete = useCallback(() => {
    sessionStorage.setItem(LOADER_KEY, '1');
    setReady(true);
    setShowLoader(false);
  }, []);

  useEffect(() => {
    if (ready) setShowLoader(false);
  }, [ready]);

  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <BrowserRouter basename={basename}>
      {showLoader ? <LoadingScreen onComplete={onLoaderComplete} /> : null}
      {ready ? <AppRoutes /> : null}
    </BrowserRouter>
  );
}
