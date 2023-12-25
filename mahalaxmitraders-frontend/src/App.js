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
        <div className="sticky top-0 z-20 bg-secondary">
          <NavBar />
        </div>
        {/* Main Content */}
        <div>
          <MahalaxmiRoutes />
        </div>
        {/* Footer */}
        <div><Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
