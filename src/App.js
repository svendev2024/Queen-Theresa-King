import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import { Footer } from './components';
import { 
  Dashboard,
  EPK
} from './views';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" name="WelcomePage" element={<Dashboard />} />
          <Route exact path="/epk-for-media" name="WelcomePage" element={<EPK />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
