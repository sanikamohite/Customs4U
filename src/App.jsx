import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import AudioInput from './pages/audioInput';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
