import Footer from "./components/footer/footer";
import NavBar from "./components/nav-bar/nav-bar";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <NavBar />
      <div className="pages_content">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
