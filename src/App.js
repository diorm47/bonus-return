import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import NavBar from "./components/nav-bar/nav-bar";
import Home from "./pages/home/home";
import Sellers from "./pages/sellers/sellers";

function App() {
  return (
    <>
      <NavBar />
      <div className="pages_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sellers" element={<Sellers />} />
        </Routes>
       
      </div>
      <Footer />
    </>
  );
}

export default App;
