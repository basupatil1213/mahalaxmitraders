import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MahalaxmiRoutes from './routes/MahalaxmiRoutes';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* NavBar */}
        <NavBar />
        {/* Main Content */}
        <MahalaxmiRoutes />
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
