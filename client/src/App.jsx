import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Create from "./components/create/Create.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Details from "./components/details/Details.jsx";
import Edit from "./components/edit/Edit.jsx";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";
import Notifications from "./components/notifications/Notifications.jsx";
import Footer from "./components/footer/Footer.jsx";
import { AuthContext } from './contexts/AuthContext.js';

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accesssToken);

    setAuthState(state);
  }
  const contextData = {
    userId: authState._id,
    email: authState.email,
    accesssToken: authState.accesssToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <Router>
      <AuthContext.Provider value={contextData}>
        <Notifications />
        <div id="wrapper">
          <Header />
          <main id="main-element">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sunglasses/:sunglassesId/details" element={<Details />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
