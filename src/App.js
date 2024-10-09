import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { 
  Header,
  Footer,
  MusicPlayer
} from './components';
import { 
  Dashboard,
  EPK
} from './views';

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" name="WelcomePage" element={<Dashboard />} />
            <Route exact path="/epk-for-media" name="WelcomePage" element={<EPK />} />
          </Routes>
        <MusicPlayer />
        <Footer />
      </Router>
    </>
  );
}

export default App;
