import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Portal from './pages/Portal/Portal'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Courses from './pages/Courses/Courses'
import Events from './pages/Events/Events'
import Admin from './pages/Auth/Admin'
import MeramAdmin from './pages/Admin/MeramAdmin'
import PrivateRoute from './pages/Private/PrivateRoute'
import Logout from './pages/Auth/Logout'
import Activities from './pages/Admin/Pages/Activities'
import CourseEdit from './pages/Admin/Pages/CourseEdit'
import Course from './pages/Courses/Course'
import Forms from './pages/Admin/Forms'
import External from './pages/External'
import NotFound from './pages/NotFound'
import Lesson from './pages/Courses/Lesson'
import Profile from './pages/Profile/Profile'
import About from './pages/General/About'
import Operations from './pages/General/FAQ'
import FAQ from './pages/General/FAQ'
import Contact from './pages/General/Contact'

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<Portal user={user} />} />
        <Route path='/about' element={<About user={user} />} />
        <Route path='/sss' element={<FAQ user={user} />} />
        <Route path='/contact' element={<Contact user={user} />} />
        <Route path='/courses'>
          <Route index element={<Courses user={user}/>} />
          <Route path='course/:id'>
            <Route index element={<Course user={user} />} />
            <Route path='lesson/:lessonId' element={<PrivateRoute><Lesson /></PrivateRoute>} />
          </Route>
        </Route>
        <Route path='/activities' element={<Events user={user} />}>
          <Route index element={<Events user={user} />} />
          <Route path='activity/:id' element={<Course user={user} />} />
        </Route>
        <Route path='/logout' element={<Logout />} />
        <Route path='/merambel' element={<PrivateRoute><Admin /></PrivateRoute>} />
        <Route path='/forms/:id' element={<Forms />} />
        <Route path='/external' element={<External />} />
        <Route path='/addminn/*' element={<PrivateRoute><MeramAdmin/></PrivateRoute>} />
        <Route path='/addminn/course/edit/:id' element={<PrivateRoute><CourseEdit/></PrivateRoute>}/>
        <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
