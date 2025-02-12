import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import Tournaments from './pages/Tournaments';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BGMICustoms from './pages/BGMICustoms';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import AudioInput from './pages/audioInput';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/bgmi-customs" element={<BGMICustoms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="/record"
              element={
                <ProtectedRoute>
                  <AudioInput />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
