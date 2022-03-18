import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import { ThemeProvider } from '@mui/material';
import theme from './pages/GlobalTheme';
import Home from './pages/Home';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <>
          <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<h1>Register</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
          </Routes>
          <Footer />
          </ThemeProvider>
      </>
    </Router>
  );
}

export default App;
