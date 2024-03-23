import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
    </HashRouter>
  );
}

export default App;
