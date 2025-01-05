import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Mentorship from "./components/Mentorship";
import CommunitySupport from "./components/CommunitySupport";
import BusinessSections from "./components/BusinessSections";
import ExpenseTracker from "./components/ExpenseTracker";
import AboutUs from "./components/AboutUs";
import Courses from "./page/Courses";
import CourseContent from "./components/coursesComponents/CourseContent";
import CreateCourse from "./components/coursesComponents/CreateCourse";

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
        path="/courses/:id"
        element={<Layout><CourseContent/> </Layout>}
      />
      <Route
        path="/expense-tracker"
        element={<Layout><ExpenseTracker /> </Layout>}
      />
      <Route
        path="/about-us"
        element={<Layout><AboutUs /> </Layout>}
      />
      <Route
        path="/create-course"
        element={<Layout><CreateCourse /> </Layout>}
      />
    </Routes>
  );
}

export default App;
