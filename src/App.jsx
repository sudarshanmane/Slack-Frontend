import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button.jsx";

import "./index.css";

import { useState } from "react";
import { Auth } from "./pages/auth/Auth.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/auth" element={<Auth></Auth>}></Route>
    </Routes>
  );
}

export default App;
