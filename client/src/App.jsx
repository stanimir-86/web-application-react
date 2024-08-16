

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
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import Logout from './components/logout/Logout.jsx';
import AuthRouteGuard from './components/common/AuthRouteGuard.jsx';
import AuthPrivateGuard from './components/common/AuthPrivateGuard.jsx';

function App() {


  return (
    <AuthContextProvider >
      <Router>
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
              {/* <Route path="/create" element={<AuthRouteGuard>< Create /></AuthRouteGuard>} /> */}
              <Route element={<AuthPrivateGuard />}>
                <Route path='/create' element={<Create />} />
                <Route path="/sunglasses/:sunglassesId/edit" element={<Edit />} />
                <Route path="/logout" element={<Logout />} />
              </Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
