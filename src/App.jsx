
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;