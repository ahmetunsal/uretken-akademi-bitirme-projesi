import React, { useEffect, useState } from 'react'
import '../../assets/css/courses.css'
import CoursesCard from '../../components/CoursesCard'
import Navi from '../../components/Navi'
import Footer from '../../components/Footer'

function Courses({ user }) {

  document.title = 'Genç Meram | Kurslar'

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/courses')
      .then(response => response.json())
      .then(json => {
        setPosts(json)
      })
  }, []);

  return (
    <div>
      <Navi user={user} />
      <div className='courses-container'>
        <div className="courses-info">
          <h1>Kurslar</h1>
          {
            !(posts.length === 0) ?
              <div className="coursess">
                {
                  posts.map((post) => (
                    <CoursesCard post={post} user={user} />
                  ))
                }
              </div>
              :
              <div className="coursess-no">
                <h1>EĞİTİM YOK</h1>
              </div>
          }
        </div>
        <br />
      </div>
      <Footer />
    </div>
  )
}

export default Courses