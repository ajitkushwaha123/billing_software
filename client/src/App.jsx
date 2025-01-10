import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./Page/AppLayout";
import Dashboard from "./Page/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
