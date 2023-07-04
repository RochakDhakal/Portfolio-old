import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./components/body/FrontPage";
import Aos from "aos";
import "aos/dist/aos.css"
import Work from "./components/body/works/Work";
import Contact from "./components/body/contact/Contact";
function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"  element={<FrontPage />} />
        <Route path="/works" element={<Work />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
