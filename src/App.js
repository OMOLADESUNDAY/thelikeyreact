import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from './Preloader';
import { Auth } from './providers/Auth';
import { Hook } from './providers/Hook';

function App() {
  const Index = React.lazy(() => import('./pages/index/Index'));
  const SignIn = React.lazy(() => import('./pages/signIn/SignIn'));
  const Dashboard = React.lazy(() => import('./user/dashboard/Dashboard'));
  return (
    <Hook>
      <Auth>
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

          {/* sign user in starts  */}
          <Route
            exact
            path="/sign-in"
            element={
              <Suspense fallback={<Preloader />}>
                <SignIn />
              </Suspense>
            }
          />
          {/* sign user in ends  */}


          <Route
            exact
            path="/dashboard"
            element={
              <Suspense fallback={<Preloader />}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </Auth>
    </Hook>
  );
}

export default App;
