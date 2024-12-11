import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import WatchlistPage from "./pages/WatchListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
