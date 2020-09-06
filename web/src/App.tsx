import React from 'react';
import ReactGA from 'react-ga';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import { ToastContainer } from 'react-toastify';

import './assets/styles/global.css';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  ReactGA.initialize("UA-1838057-33");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="container">
      <BrowserRouter>
        <AuthProvider>
          <div className="content_block">
            <Navbar />
            <Sidebar />
            <main className="content">
              <Routes />
            </main>
            <Footer />
            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={true}
              closeOnClick
              pauseOnHover
            />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;