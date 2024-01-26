import React, { useEffect, useState } from 'react'
import Navi from '../../components/Navi'
import '../../assets/css/course_page.css'
import Footer from '../../components/Footer'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


function Course({ user }) {


    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/courses/${id}`)
            .then(response => response.json())
            .then(json => {
                setPost(json)
                setLoading(false)
                console.log(json.courseName)
            })
    }, []);

    useEffect(() => {
        document.title = post.courseName
    }, [post]);

    if (loading) {
        return (
            <h1 style={{
                display: "flex",
                width: "100%",
                height: "50vh",
                justifyContent: "center",
                alignItems: "center"
            }}>Yükleniyor..</h1>
        )
    }


    return (
        <div>
            <Navi user={user} />
            <div className="course-page-container">
                <div className="general-container">
                    <div className="course-page-course-info-left">
                        <img width={300} src="https://www.yenimeram.com.tr/wp-content/uploads/2023/10/23/mega-yazilim-akademisi-basliyor-son-basvuru-3-kasim-2883.jpg" alt="" />
                        <div className="course-page-course-info-header">
                            <h2>{post.courseName}</h2>
                            <h4>{post.courseTag} </h4>
                            <div className="badges">
                                {
                                    post.courseFacilities && post.courseFacilities.map((facility,i) => (
                                        <div key={i} className="badges-cardd">
                                            <p>{facility}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="course-page-course-info-description">
                        <h2>Açıklama</h2>
                        <p>{post.courseDescription}</p>
                        <div className="lessons">
                            <h2>Dersler</h2>
                            {
                                post.lessons && post.lessons.map((lesson,i) => (
                                    <div key={i} className="lesson">
                                        <h3>{i}. {lesson.lessonName}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="genext-container">
                    <div className="course-register">
                        <h3>Kayıt Ol</h3>
                        {
                            user ?
                                (
                                    <div className="course-register-form">
                                        <Link to={`/forms/${id}?source=courses`} className='button'>Kayıt Formu</Link>
                                        <Link onClick={() => { toast.warn("Şuan ders alma aktif değil. Fakat yakında...") }} className='button button-disabled'>Derse Başla</Link>
                                    </div>
                                )
                                :
                                <p itemType='button' className='button'>Giriş Yapmalısınız</p>
                        }
                    </div>
                    <div className="course-register">
                        <h3>Eğitmen{ post.courseInstructors?.length > 1 ? "ler" : "" } </h3>
                        <div className="course-instructors">
                            {
                                post.courseInstructors &&
                                post.courseInstructors.map((instructor,i) => (
                                    <div key={i} className="course-instructor">
                                        <img width={80} height={80} src={instructor.trainerPhoto} alt="" />
                                        <p>{instructor.trainerName}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Course