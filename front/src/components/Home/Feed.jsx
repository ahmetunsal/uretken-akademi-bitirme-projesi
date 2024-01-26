import React, { useEffect, useState } from 'react'
import '../../assets/css/home.css'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import CoursesCard from '../CoursesCard'

function Feed({ user }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
            .then(response => response.json())
            .then(json => {
                setPosts(json)
                console.log(json)
            })
    }, []);

    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="course-catalog">
                        <ul>
                            <li>
                                <Link to="/courses?filter=42042">
                                    <i className="fas fa-code"></i>
                                    Yazılım
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses?filter=42043">
                                    <i className="fas fa-palette"></i>
                                    Tasarım
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses?filter=42044">
                                    <i className="fas fa-chart-line"></i>
                                    İşletme
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <i className="fas fa-language"></i>
                                    Dil
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <i className="fas fa-brain"></i>
                                    Yapay Zeka
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <i className="fas fa-gear"></i>
                                    Araçlar
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <i class="fa-solid fa-microchip"></i>
                                    Donanım
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="carousel">
                        <Carousel />
                    </div>
                </div>
                {
                    posts.length != 0 ?
                        <div className="courses" style={{ overflowX: "scroll" }}>
                            {
                                posts.map((post) => {
                                    console.log(post)
                                    return <CoursesCard post={post} user={user} />
                                })
                            }
                        </div>
                        :
                        <div className="courses" style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                            <h1 style={{ textAlign: "center" }}>Kurs Yok</h1>
                        </div>
                }
            </div>
        </div>
    )
}

export default Feed