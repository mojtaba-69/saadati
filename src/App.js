import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Main/Layout";
import Login from "./pages/Main/Login"
import UserManagement from "./pages/User/UserManagement";
import Dashboard from "./pages/Main/Dashboard";
import AddUser from "./pages/User/AddUser";
import AllUser from "./pages/User/AllUser";
import AdvertiseManagement from "./pages/Advertise/AdvertiseManagement"
import AllAdvertise from "./pages/Advertise/AllAdvertise";
import NoPage from "./pages/NoPage";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import { store } from "./redux/Store";
export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index path="Dashboard" element={<Dashboard />} />
          <Route path="UserManagement" element={<UserManagement />} />
          <Route path="AddUser" element={<AddUser />} />
          <Route path="AllUser" element={<AllUser />} />
          <Route path="AdvertiseManagement" element={<AdvertiseManagement />} />
          <Route path="AllAdvertise" element={<AllAdvertise />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );}