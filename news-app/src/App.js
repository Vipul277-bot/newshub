
import './App.css';
import React from 'react';
import News from './Components/News';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>

        {/* Routes where Navbar is hidden */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Routes with Navbar */}
        <Route element={<Layout />}>
          <Route path="/home" element={<ProtectedRoute><News key="general" category="general" /></ProtectedRoute>} />
          <Route path="/business" element={<ProtectedRoute><News key="business" category="business"/></ProtectedRoute>}/>
          <Route path="/entertainment" element={<ProtectedRoute><News key="entertainment" category="entertainment"/></ProtectedRoute>}/>
          <Route path="/technology" element={<ProtectedRoute><News key="technology" category="technology"/></ProtectedRoute>}/>
          <Route path="/science" element={<ProtectedRoute><News key="science" category="science"/></ProtectedRoute>}/>
          <Route path="/health" element={<ProtectedRoute><News key="health" category="health"/></ProtectedRoute>}/>
          <Route path="/sports" element={<ProtectedRoute><News key="sports" category="sports"/></ProtectedRoute>}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
