import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login"
import UserManagement from "./pages/UserManagement";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index path="Dashboard" element={<Dashboard />} />
          <Route path="UserManagement" element={<UserManagement />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );}