import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import Tournaments from './pages/Tournaments';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BGMICustoms from './pages/BGMICustoms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gaming-dark text-gaming-light font-body">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/bgmi-customs" element={<BGMICustoms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
