import { Route, Routes } from "react-router-dom";
import DetailMovie from "../views/pages/DetailMovie";
import Home from "../views/pages/Home";
import MoviesPage from "../views/pages/MoviesPage";
import UserProfilePage from "../views/pages/UserProfilePage";
import SignInPage from "../views/pages/SignInPage";
import SignUpPage from "../views/pages/SignUpPage";
import ProtectedRoute from "./ProtectedRoutes";
import VerifyEmailPage from "../views/pages/VerifyEmailPage";
import MoviesPageDua from "../views/pages/MoviesPageDua";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies-dua" element={<MoviesPageDua />} />
      <Route path="/movie/:id" element={<DetailMovie />} />

      <Route
        path="/sign-in"
        element={
          <ProtectedRoute
            isAuthenticatedState={false}
            element={<SignInPage />}
          />
        }
      />

      <Route
        path="/sign-up"
        element={
          <ProtectedRoute
            isAuthenticatedState={false}
            element={<SignUpPage />}
          />
        }
      />

      {/* User */}
      <Route
        path="/user-profile"
        element={
          <ProtectedRoute
            role={["admin", "writer"]}
            element={<UserProfilePage />}
          />
        }
      />
      {/* verify-email */}
      <Route
        path="/verify-email"
        element={<ProtectedRoute role="writer" element={<VerifyEmailPage />} />}
      />

      {/* Unauthorized */}
      <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
      {/* Admin */}
      {/* <Route 
        path="/admin" 
        element={<ProtectedRoute role="admin" element={<AdminPage />} />}
      {/* <Route 
        path="/info" 
        element={<ProtectedRoute role="writer" element={<InfoPage />} />} 
      /> */}
    </Routes>
  );
}
