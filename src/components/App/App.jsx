import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import authSelectors from "../../redux/auth/auth-selectors";
import { useGetCurrentUserMutation } from "../../redux/auth/auth-operations";

import AppBar from "../navBar/AppBar";
import Container from "../Container/Container";

const HomeView = lazy(() =>
  import("../views/HomeView" /* webpackChunkName: 'home-view'*/)
);
const ContactsView = lazy(() =>
  import("../views/ContactsView" /* webpackChunkName: 'contacts-view'*/)
);
const LoginView = lazy(() =>
  import("../views/LoginView" /* webpackChunkName: 'login-view'*/)
);
const RegisterView = lazy(() =>
  import("../views/RegisterView" /* webpackChunkName: 'register-view'*/)
);

export default function App() {
  const [getCurrentUser] = useGetCurrentUserMutation();
  const isRefreshingCurrentUser = useSelector(authSelectors.getCurrentUser);
  useEffect(() => getCurrentUser(), [getCurrentUser]);

  return (
    <>
      <Container>
        <AppBar />
      </Container>

      {isRefreshingCurrentUser && <p>Refreshing data ...</p>}

      {!isRefreshingCurrentUser && (
        <Container>
          <Suspense fallback={<>Loading...</>}>
            <Routes>
              <Route path="/" element={<HomeView />} />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />

              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Container>
      )}
    </>
  );
}
