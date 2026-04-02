import GlobalContextProvider from "./context/GlobalContext";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AfterCare from "./pages/Aftercare";
import Galleries from "./pages/Galleries";
import GalleryCategoryPage from "./pages/GalleryCategoryPage";
import Booking from "./pages/BookingPage";

function MerchPlaceholder() {
  return (
    <div className="page-placeholder">
      <p>Merch — coming soon.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <header className="site-header">
          <Navbar />
          <Header />
        </header>
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aftercare" element={<AfterCare />} />
            <Route path="/galleries" element={<Galleries />} />
            <Route
              path="/galleries/:category"
              element={<GalleryCategoryPage />}
            />
            <Route path="/booking" element={<Booking />} />
            <Route path="/merch" element={<MerchPlaceholder />} />
          </Routes>
        </main>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
