import './App.css';

import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/confirmed" element={<ConfirmedBookingPage />}></Route>
    </Routes>
  );
}

export default App;
