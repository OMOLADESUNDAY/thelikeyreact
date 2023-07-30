import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from './Preloader';
import { Hook } from './providers/Hook';

function App() {
  const Index = React.lazy(() => import('./pages/index/Index'));
  return (
    <Hook>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Index />
            </Suspense>
          }
        />
      </Routes>
    </Hook>
  );
}

export default App;
