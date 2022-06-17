import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotfoundPage from './Pages/NotfoundPage/NotfoundPage';
import SignUp from './Pages/SignUp/SignUp';
import Curriculum from './Pages/SingleCourse/Curriculum';
import Instructor from './Pages/SingleCourse/Instructor';
import Overview from './Pages/SingleCourse/Overview';
import Review from './Pages/SingleCourse/Review';
import SingleCourse from './Pages/SingleCourse/SingleCourse';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/about'} element={<About />}></Route>
        <Route path={'/courses'} element={<Courses />}></Route>
        <Route path={'/blog'} element={<Blog/>}></Route>
        <Route path={'/contact'} element={<ContactUs/>}></Route>
        <Route path={'/login'} element={<Login/>}></Route>
        <Route path={'/singup'} element={<SignUp/>}></Route>

        <Route path={'*'} element={<NotfoundPage/>}></Route>
        <Route path={'course/:id'} element={<SingleCourse />}>

          <Route index path='' element={<Overview />}></Route>
          <Route path='curriculum' element={<Curriculum />}></Route>
          <Route path='instractor' element={<Instructor />}></Route>
          <Route path='review' element={<Review />}></Route>
        </Route>
      </Routes>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
