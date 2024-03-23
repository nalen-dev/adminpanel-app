import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import UserManage from "./pages/UserManage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/products" Component={ProductsPage} />
        <Route path="/usermanage" Component={UserManage} />
      </Routes>
    </HashRouter>
  );
}

export default App;
