import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Mentorship from "./components/Mentorship";
import CommunitySupport from "./components/CommunitySupport";
import BusinessSections from "./components/BusinessSections";
import Courses from "./components/Courses";
import ExpenseTracker from "./components/ExpenseTracker";
import AboutUs from "./components/AboutUs";

function App() {
  return (
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
      <Route
        path="/expense-tracker"
        element={<Layout><ExpenseTracker /> </Layout>}
      />
      <Route
        path="/about-us"
        element={<Layout><AboutUs /> </Layout>}
      />
    </Routes>
  );
}

export default App;
