// Styles
import "./App.scss";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";

// Components
import PageHeader from "./components/PageHeader/PageHeader";
import PageMenu from "./components/PageMenu/PageMenu";
import PageFooter from "./components/PageFooter/PageFooter";

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageMenu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/m/:tmdb_id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
      <PageFooter />
    </div>
  );
}

export default App;
