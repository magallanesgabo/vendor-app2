import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Nav from './components/Nav';
import Login from './pages/login';
import ResetPassword from './pages/resetPassword';
import VendorReport from './pages/vendorReport';
import ScanCode from './pages/scanCode';
import VendorHome from './pages/vendorHome';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/vendor-report" element={<VendorReport />} />
        <Route path="/scan-code" element={<ScanCode />} />
        <Route path="/home" element={<VendorHome />} />
      </Routes>
    </div>
  );
} 

export default App;
