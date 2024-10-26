import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header.js'
import HomePage from './components/Homepage.js'
import BookingPage from './components/Bookingpage.js'
import Footer from './components/sections/Footer.js'

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
