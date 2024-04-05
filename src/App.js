
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route index element= {<SignUp />} />
      <Route path="/SignUp" element={<SignUp />}  />
      <Route path="/LoginForm" element={<LoginForm/>}  />
      <Route path="*" element={<NoPage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
