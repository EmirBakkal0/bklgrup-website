import "./index.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Principles from "./pages/Principles";

function App() {

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/principles" element={<Principles/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App