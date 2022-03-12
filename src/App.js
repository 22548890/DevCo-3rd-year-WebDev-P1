import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ProfileDev from "./Pages/ProfileDev";
import ContactDev from "./Pages/ContactDev";
import JobsDev from "./Pages/JobsDev";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ProfileDev />} />
        <Route path="/contactdev" element={<ContactDev />} />
        <Route path="/jobsdev" element={<JobsDev />} />
      </Routes>
    </main>
  );
}

export default App;
