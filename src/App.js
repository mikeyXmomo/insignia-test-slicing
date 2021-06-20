import Navbar from "./components/Navbar";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb";
import VideoSection from "./components/VideoSection";
import PeopleAndDocuments from "./components/People";
import Documents from "./components/Documents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="background-red">
      <Navbar />
      <Breadcrumb />
      <VideoSection />
      <PeopleAndDocuments />
      <Documents />
      <Footer />
    </div>
  );
}

export default App;
