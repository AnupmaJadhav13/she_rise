import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Sections/Home"
import BusinessConnect from "./Sections/BusinessConnect"
import MentorConnect from "./Sections/MentorConnect"
import CommunityForum from "./Sections/CommunityForum"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-connect" element={<BusinessConnect />} />
        <Route path="/mentor-connect" element={<MentorConnect />} />
        <Route path="/community-forum" element={<CommunityForum />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
