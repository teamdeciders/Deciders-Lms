import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import SingleCourse from './Pages/SingleCourse/SingleCourse';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/about'} element={<About />}></Route>
        <Route path={'/courses'} element={<Courses />}></Route>
        <Route path={'/course/:id'} element={<SingleCourse />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
