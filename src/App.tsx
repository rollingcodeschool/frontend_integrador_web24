import { BrowserRouter, Route, Routes } from "react-router";
import ExitoViews from "./views/ExitoViews";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExitoViews />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
