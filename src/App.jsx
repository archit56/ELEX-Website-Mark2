import "./styles.css";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import Home from "./components/ui/home";
import About from "./components/ui/about";
import Announcements from "./components/ui/announcements";
import Admissions from "./components/ui/admissions";
import Campus from "./components/ui/campus";
import Login from "./components/ui/login";
import Event from "./components/ui/event";
import { motion, useScroll } from "framer-motion";

import { Routes, Route } from "react-router-dom";
import Resources from "./components/ui/resources";
import ResourcesForm from "./components/forms/resourcesForm";
import AdmissionsForm from "./components/forms/admissionsForm";
import AnnouncementsForm from "./components/forms/announcementsForm";
import AboutForm from "./components/forms/aboutForm";
import EventsForm from "./components/forms/eventsForm";
import PlacementsForm from "./components/forms/placementsForm";
import Placements from "./components/ui/placements";
import Contact from "./components/ui/contact";
import ContactInfoForm from "./components/forms/ContactInfoForm";
import CampusForm from "./components/forms/campusForm";
import ResearchForm from "./components/forms/researchForm";
import Research from "./components/ui/research";
export default function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/event" element={<Event />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resourceForm" element={<ResourcesForm />} />
          <Route path="/admissionForm" element={<AdmissionsForm />} />
          <Route path="/annoucementsForm" element={<AnnouncementsForm />} />
          <Route path="/aboutForm" element={<AboutForm />} />
          <Route path="/eventsForm" element={<EventsForm />} />
          <Route path="/placementsForm" element={<PlacementsForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactInfoForm" element={<ContactInfoForm />} />
          <Route path="/campusForm" element={<CampusForm />} />
          <Route path="/research" element={<Research />} />
          <Route path="/researchForm" element={<ResearchForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
