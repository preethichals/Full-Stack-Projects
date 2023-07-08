import "./App.css";
import { Routes,Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/Homepage";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";


function App() {
  return (
    <>
     <Routes>
     <Route path={'/'} element={<Homepage/>} />
     <Route path={'/about'} element={<AboutPage/>} />
     <Route path={'/gallery'} element={<GalleryPage/>} />
     <Route path={'/contact'} element={<Contact/>} />
     <Route path={'/blog'} element={<BlogPage/>}/>
     </Routes>
    </>
  );
}

export default App;
