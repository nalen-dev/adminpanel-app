import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import UserManage from "./pages/UserManage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/products" Component={ProductsPage} />
          <Route path="/usermanage" Component={UserManage} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
