import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, MusicPlayer } from "./components";
import { Home, EPK } from "./views";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" name="WelcomePage" element={<Home />} />
          <Route
            exact
            path="/epk-for-media"
            name="EPKPage"
            element={<EPK />}
          />
        </Routes>
        <MusicPlayer />
        <Footer />
      </Router>
    </>
  );
}

export default App;
