import './App.css';

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import SigninPage from './components/pages/SigninPage';
import SignupPage from './components/pages/SignupPage';
import TicketPage from './components/pages/TicketPage';

function App() {
  const [ isHalf, setIsHalf ] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout half={isHalf} />}>
          <Route index element={<SigninPage { ...{ setIsHalf } } />} />
          <Route path="signup" element={<SignupPage { ...{ setIsHalf } } />} />
          <Route path="tickets" element={<TicketPage { ...{ setIsHalf } } />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;