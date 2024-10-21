import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js'
import HomePage from './components/Homepage.js'
import BookingPage from './components/Bookingpage.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
