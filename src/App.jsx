import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
//Pages import
import Contacts from "./pages/Contacts";
import Header from "./layouts/Header";
import AddContact from "./pages/AddContact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import EditContact from "./pages/EditContact";
import ContactDetails from "./pages/ContactDetails";
import { ContactContext } from "./context/Contact.context";
import { ThemeContext } from "./context/Theme.context";


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
        <Container
          style={{ width: "800px", margin: "0 auto" }}
          className="pt-3"
        >
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/contacts/:id" element={<ContactDetails />} />
            <Route path="/edit-contact/:id" element={<EditContact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
    </div>
  );
}

export default App;
