import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/client/SignInPage";
import SignUpPage from "../pages/client/SignUpPage";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Client Pages</div>} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}
