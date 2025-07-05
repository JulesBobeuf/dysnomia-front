import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoutes";
import Profile from "./pages/Profile";
import TopGameList from "./pages/TopGameList";
import SearchGame from "./pages/SearchGame";
import CompanyDetails from "./pages/CompanyDetails";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/top" element={<TopGameList />} />
          <Route path="/search" element={<SearchGame />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
