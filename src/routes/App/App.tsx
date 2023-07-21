import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { routes, ROUTE_TYPE_REDIRECT, ROUTE_PATH } from 'routes';
import Loading from 'components/Loading/Loading';
import Maintenance from 'components/Maintenance/Maintenance';
import Header from 'components/Header/Header';
import { State } from 'src/models/state';
import { useAppSelector } from 'store';
import { constants } from 'utils/defaultConstants';

const App: React.FC = () => {
  const sessionChecked = useAppSelector((state: State) => state.session.checked);
  // Change this flag to false to disable maintenance screen at login
  if (constants.MAINT_MODE) {
    return (
      <div>
        <Maintenance />
      </div>
    );
  }
  return (
    <Routes>
      {routes.map((route, index) => {
        switch (route.type) {
          case ROUTE_TYPE_REDIRECT:
            return (
              <Route
                key={index}
                path={route.from}
                element={<Navigate to={route.to} replace />}
              />
            );

          default:
            return (
              <Route
                key={index}
                path={route.path}
                element={route.ignoreSession || sessionChecked
                  ? (
                    <ErrorBoundary>
                      <Header />
                      <section className='component'>
                        <Loading />
                        {route.component && <route.component />}
                      </section>
                    </ErrorBoundary>
                  ) : (
                    <Navigate to={`${ROUTE_PATH.AUTH}/login`} replace />
                  )}
              />
            );
        }
      })}
      <Route path='*' element={<Navigate to={`${ROUTE_PATH.ERROR}/404`} replace />} />
    </Routes>
  );
};

App.displayName = 'App';

export default App;
