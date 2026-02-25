
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import MovieDetail from "./pages/MovieDetail";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route path="/" element={<HomePage />} />

          <Route path="/movies/:id" element={<MovieDetail />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
