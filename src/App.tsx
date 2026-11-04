import { BrowserRouter, Route, Routes } from "react-router";
import ExitoViews from "./views/ExitoViews";
import FalloViews from "./views/FalloViews";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExitoViews />} />
        <Route path="/fallo" element={<FalloViews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
