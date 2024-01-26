import React, { useEffect } from 'react'
import '../../../../assets/css/info_activity.css'
import { Link, useParams } from 'react-router-dom';

function InfoCourse() {


    document.title = 'Kurs Bilgileri'

    const [activity, setActivity] = React.useState([]);
    const [forms, setForms] = React.useState([]);
    const [trainers, setTrainers] = React.useState([]);
    const [applicants, setApplicants] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const { id } = useParams();

    React.useEffect(() => {
        fetch('http://localhost:3000/api/courses')
            .then(response => response.json())
            .then(json => {
                //json = json.filter((course) => course.id === id)
                //console.log(json[0])
                document.title = json[0].courseName
                setActivity(json[0])
                setLoading(false)
            })

        fetch(`http://localhost:3000/api/courses/${id}/lessons/`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                json = json.filter((form) => form.id === id)
                console.log(json)
                setForms(json)
            })

        fetch(`http://localhost:3000/api/courses/${id}/trainers`)
            .then(response => response.json())
            .then(json => {
                //console.log(json)
                //json = json.filter((form) => form.id === id)
                //console.log(json)
                setTrainers(json)
            })
    }, [id]);

    useEffect(() => {
        console.log(forms)
        for (const form of forms) {
            setApplicants(form.formAppliciants)
        }
    }, [forms]);

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>Yükleniyor...</h1>
            </div>
        )
    }

    return (
        <div>
            <div className="info-activity-container">
                <div className="info-activity">
                    <div className="info-activity-header">
                        <h1>{activity.courseName} </h1>
                        <div>
                            <Link className='btn btn-success' to={`/addminn/kurs/detay/${id}/ders/ekle`}>
                                <i class="fa-solid fa-plus"></i>
                                Yeni Ders
                            </Link>
                            <Link className='btn btn-success' to={`/addminn/kurs/detay/${id}/egitmen/ekle`}>
                                <i class="fa-solid fa-plus"></i>
                                Yeni Eğitmen
                            </Link>
                        </div>
                    </div>
                    <div className='info-activity-trainers'>
                        {
                            trainers.forEach((trainer, i) => {
                                //console.log(trainer.trainerName)
                                return (
                                    <div key={i} className="trainer">
                                        <img width={80} src={trainer.trainerPhoto ? trainer.trainerPhoto : "https://www.meram.bel.tr/assets/img/svg/meramBel.svg"} alt="" />
                                        <div className="trainer-info">
                                            <h3>{trainer.trainerName} </h3>
                                            <Link className='btn-trainer btn-primary' to={`/addminn/kurs/detay/${id}/egitmen/guncelle/${id}`}>
                                                <i class="fa-solid fa-pen"></i>
                                                Düzenle
                                            </Link>
                                            <Link className='btn-trainer btn-danger' to={`/addminn/kurs/detay/${id}/egitmen/sil/${id}`}>
                                                <i class="fa-solid fa-trash"></i>
                                                Sil
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="info-acitivity-applicants">
                        <h2>Dersler {applicants.length === 0 ? "" : `: ${applicants.length}`}</h2>
                        <div className="applicants">
                            {
                                activity.lessons.length === 0 ? <h3>Ders bulunmamaktadır.</h3> :
                                    activity.lessons.map((lesson, i) => (
                                        <div key={lesson.id} className="applicant">
                                            <div className="applicant-info">
                                                <div className="applicant-info-left">
                                                    <img width={50} src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="" />
                                                    <ul>
                                                        <li>{i}. {lesson.lessonName}</li>
                                                    </ul>
                                                </div>
                                                <div className="applicant-info-right">
                                                    <Link className='btn btn-primary' to={`/addminn/kurs/detay/${id}/ders/guncelle/${lesson.id}`}>
                                                        <i class="fa-solid fa-pen"></i>
                                                        Düzenle
                                                    </Link>
                                                    <Link className='btn btn-danger' to={`/addminn/kurs/detay/${id}/ders/sil/${lesson.id}`}>
                                                        <i class="fa-solid fa-trash"></i>
                                                        Sil
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCourse