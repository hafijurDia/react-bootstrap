import { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
//Pages import
import Contacts from "../pages/Contacts";
import Header from "../layouts/Header";
import AddContact from "../pages/AddContact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import EditContact from "../pages/EditContact";
import ContactDetails from "../pages/ContactDetails";
import { ContactContext } from "../context/Contact.context";
import { ThemeContext } from "../context/Theme.context";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Profile from "../pages/Profile";
import ManagePassword from "../pages/ManagePassword";
import UserContactList from "../pages/UserContactList";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app" id={theme}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />
      <Container className="pt-3">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route 
          path="/contacts" 
          element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
          } />
          <Route path="/add-contact" element={
            <PrivateRoute>
              <AddContact />
            </PrivateRoute>
          } />
          <Route path="/contacts/:id" element={
            <PrivateRoute>
              <ContactDetails />
            </PrivateRoute>
          
          } />
          <Route path="/edit-contact/:id" element={
            <PrivateRoute>
              <EditContact />
            </PrivateRoute>
          
          } />
          <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
          
          } />

          <Route path="dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          
          } >
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="manage-password" element={<ManagePassword />} />
            <Route path="contacts" element={<UserContactList />} />
          </Route>
          
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />

          <Route path="/login" element={
            <PublicRoute>
            <Login />
          </PublicRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
