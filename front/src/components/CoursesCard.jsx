import React from 'react'
import '../assets/css/courses_card.css'
import { Link } from 'react-router-dom'

function CoursesCard({ post }) {
    console.log(post)
    return (
        <Link to={`/courses/course/${post.id}`} className='course'>
            <div className="course-img">
                <img src={post.courseImage ? post.courseImage : "https://www.meram.bel.tr/upload/medya/2_215.jpg"} alt="" />
            </div>
            <div className="course-header">
                <h3>{post.courseName}</h3>
                <p>{post.courseTag}</p>
            </div>
            <div className='course-footer'>
                <div class="badge green">
                    {post.courseLevel || "Temel Seviye"}
                </div>
            </div>
        </Link>
    )
}

export default CoursesCard