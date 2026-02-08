import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HeaderWithHero from './components/layout/HeaderWithHero';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoginModal from './components/ui/LoginModal';
import Home from './pages/Home';
import RutaNet from './pages/RutaNet';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderWithHero onLoginClick={openLoginModal} />
                <main className="flex-grow">
                  <Home />
                </main>
              </>
            }
          />
          <Route
            path="/ruta-net"
            element={
              <>
                <Header onLoginClick={openLoginModal} />
                <main className="flex-grow">
                  <RutaNet />
                </main>
              </>
            }
          />
        </Routes>

        <Footer />
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      </div>
    </Router>
  );
}

export default App;