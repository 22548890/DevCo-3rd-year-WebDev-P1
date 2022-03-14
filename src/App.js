import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ProfileDev from "./Pages/ProfileDev";
import ContactDev from "./Pages/ContactDev";
import JobsDev from "./Pages/JobsDev";
import NavBar from "./Components/NavBar";

import ProfileCompany from "./Pages/ProfileCompany";
import JobsCompany from "./Pages/JobsCompany";
import ContactCompany from "./Pages/ContactCompany";

function App() {
  return (
    <main>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiledev" element={<ProfileDev />} />
        <Route path="/contactdev" element={<ContactDev />} />
        <Route path="/jobsdev" element={<JobsDev />} />

        <Route path="/profilecompany" element={<ProfileCompany />} />
        <Route path="/contactcompany" element={<ContactCompany />} />
        <Route path="/jobscompany" element={<JobsCompany />} />
      </Routes>
    </main>
  );
}

export default App;
