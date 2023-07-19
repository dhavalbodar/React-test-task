import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/layout";
import ProtectedRoute from "./Routes/ProtectedRoute";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const LoginPage = lazy(() => import("./views/Login/Login"));
  const SignUpPage = lazy(() => import("./views/SignUp/SignUp"));
  const HomePage = lazy(() => import("./views/Home/Home"));
  const NotFoundPage = lazy(() => import("./views/NotFound/NotFound"));
  const AboutUsPage = lazy(() => import("./views/AboutUs/AboutUs"));
  const HeadAndTailPage = lazy(() => import("./views/HeadAndTail/HeadAndTail"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="home" element={<HomePage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="head-tail" element={<HeadAndTailPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
