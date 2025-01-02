import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Mentorship from "./components/Mentorship";
import CommunitySupport from "./components/CommunitySupport";
import BusinessSections from "./components/BusinessSections";
import Courses from "./components/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout><Hero /></Layout>}
        />
        <Route
          path="/home"
          element={<Layout><Home /> </Layout>}
        />
        <Route
          path="/mentorship"
          element={<Layout><Mentorship /> </Layout>}
        />
        <Route
          path="/community-support"
          element={<Layout><CommunitySupport /> </Layout>}
        />
        <Route
          path="/business-sections"
          element={<Layout><BusinessSections /> </Layout>}
        />
        <Route
          path="/courses"
          element={<Layout><Courses /> </Layout>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
