import { Route, Routes } from "react-router-dom";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import Landing from "../screens/Landing/Landing";
import Movies from "../screens/Movies/Movies";
import NotFound from "../screens/NotFound/NotFound";
import Profile from "../screens/Profile/Profile";
import SavedMovies from "../screens/SavedMovies/SavedMovies";
import "./App.css";

function App() {
  return (
    <div className="content-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
