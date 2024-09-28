import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/client/SignInPage";
import SignUpPage from "../pages/client/SignUpPage";
import Home from "../pages/client/Home";
import DetailMovieWrapper from "../pages/client/DetailMovieWrapper";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/movie/:id" element={<DetailMovieWrapper />} /> 
    </Routes>
  );
}
