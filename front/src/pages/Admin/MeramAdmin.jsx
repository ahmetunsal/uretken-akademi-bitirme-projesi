import React from 'react';
import '../../assets/css/meram_admin.css';
import NotFound from '../NotFound';
import { Link, Route, Routes } from 'react-router-dom';
import Activities from './Pages/Activities';
import AddActivity from './Pages/Activities/AddActivity';
import UpdateActivity from './Pages/Activities/UpdateActivity';
import DeleteActivity from './Pages/Activities/DeleteActivity';
import InfoActivity from './Pages/Activities/InfoActivity';
import AdminCourse from './Pages/AdminCourse';
import AddCourse from './Pages/Courses/AddCourse';
import UpdateCourse from './Pages/Courses/UpdateCourse';
import InfoCourse from './Pages/Courses/InfoCourse';
import AddLesson from './Pages/Courses/AddLesson';
import DeleteCourse from './Pages/Courses/DeleteCourse';
import AddTrainer from './Pages/Courses/AddTrainer';
import DeleteLesson from './Pages/Courses/DeleteLesson';

function MeramAdmin({ user }) {

  document.title = 'Meram Admin';

  return (
    <div className='containera'>
      <div className="navi">
        <div className="navi-header">
          <h1>Meram Admin</h1>
        </div>
        <div className="pages">
          <Link to="/addminn" className="page">
            <img width={20} src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="" />
            <p>Ana Sayfa</p>
          </Link>
          <Link to="/addminn/etkinlik" className="page">
            <img width={20} src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="" />
            <p>Etkinlik Ayarları</p>
          </Link>
          <Link to="/addminn/kurs" className="page">
            <img width={20} src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="" />
            <p>Eğitim Ayarları</p>
          </Link>
          <Link to="/addminn/takim" className="page">
            <img width={20} src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="" />
            <p>Takım Ayarları</p>
          </Link>
        </div>
      </div>
      <div className="settings">
        <Routes>
          <Route index element={<Activities />} />
          <Route path='/etkinlik'>
            <Route index element={<Activities />} />
            <Route path='ekle' element={<AddActivity />} />
            <Route path='detay/:id' element={<InfoActivity />} />
            <Route path='duzenle/:id' element={<UpdateCourse />} />
            <Route path='sil/:id' element={<DeleteActivity />} />
          </Route>
          <Route path='/kurs'>
            <Route index element={<AdminCourse />} />
            <Route path='ekle' element={<AddCourse />} />
            <Route path='detay/:id'>
              <Route index element={<InfoCourse />} />
              <Route path='ders/ekle' element={<AddLesson />} />
              <Route path='egitmen/ekle' element={<AddTrainer />} />
              <Route path='ders/guncelle/:lessonId' element={<UpdateCourse />} />
              <Route path='ders/sil/:lessonId' element={<DeleteLesson />} />
            </Route>
            <Route path='duzenle/:id' element={<UpdateCourse />} />
            <Route path='sil/:id' element={<DeleteCourse />} />
          </Route>
          <Route path='/takim' element={<h1>Takım Ayarları</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default MeramAdmin;
