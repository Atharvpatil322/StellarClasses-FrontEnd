// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from '../pages/Register';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import PublicRoute from '../components/PublicRoute';
import ProtectedRoute from '../components/ProtectedRoute';
// import '../styles/HomePage.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
