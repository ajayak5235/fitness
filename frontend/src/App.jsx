


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Chat from './pages/Chat';  // ✅ Chat should be accessible to everyone
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import Women from './pages/Women';
import Men from './pages/Men';
import Kid from './pages/Kid';
import Old from './pages/Old';
import './App.css';  // Create this file for global styles

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/women" element={<Women />} />
              <Route path="/men" element={<Men />} />
              <Route path="/kid" element={<Kid />} />
              <Route path="/old" element={<Old />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
