import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import CadOrganizacao from "./pages/cadOrganizacao";

function App() {
  return (
    <BrowserRouter>
      <Routes>


      <Route path="/cad/nova/organizacao" element={<CadOrganizacao/>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
