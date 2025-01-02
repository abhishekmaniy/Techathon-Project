import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout><Hero /></Layout>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
