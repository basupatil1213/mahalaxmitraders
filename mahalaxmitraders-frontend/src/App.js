import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MahalaxmiRoutes from './routes/MahalaxmiRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        {/* Main Content */}
        <MahalaxmiRoutes /> {/* This is where the magic happens */}
        {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
