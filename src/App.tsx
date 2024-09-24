
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./components/LayOut";
import Home from "./components/Home";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
