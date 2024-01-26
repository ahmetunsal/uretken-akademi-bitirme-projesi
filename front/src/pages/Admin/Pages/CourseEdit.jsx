import React, { useEffect, useState } from 'react'
import '../../../assets/css/course_edit.css'
import { useNavigate, useParams } from 'react-router-dom';

function CourseEdit() {


    document.title = 'Kurs Düzenle | Admin Paneli'

    const [course, setCourse] = useState({});
    const [courses, setCourses] = useState([]);
    const [courseBlanks, setCourseBlanks] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
            .then(res => res.json())
            .then(data => {
                // Handle the courses data here
                setCourses(data);
                console.log(data)
                console.log(id)
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);

    useEffect(() => {
        setCourseBlanks(courses.filter(x => x.id === id)[0]);
    }, [courses]);

    useEffect(() => {
        console.log(courseBlanks)
    }, [courseBlanks])

    function handleInputChange(e) {
        setCourse(prev => {
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        });
        //console.log({ [e.target.id]: e.target.value });
        console.log(course)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (course) {
            fetch('http://localhost:3000/api/courses/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(course)
            })
                .then(res => res.json())
                .then(data => {  
                    if (data.success) {
                        alert('Kurs başarıyla eklendi.')
                        navigate("/addminn")
                    } else {
                        alert('Kurs eklenirken bir hata oluştu.')
                    }
                })
        }
    }

    return (
        <div className='course-edit-container'>
            <h1 style={{textAlign: 'center'}}>Etkinlik Düzenle</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} required id='courseName' defaultValue={courseBlanks ? courseBlanks.courseName : ""} contentEditable={'true'} placeholder='Kurs Başlığı' />
                <input type="text" onChange={handleInputChange} required id='courseTag' defaultValue={courseBlanks ? courseBlanks.courseTag : ""} contentEditable={'true'} placeholder='Kurs Konusu' />
                <input type="text" onChange={handleInputChange} required id='courseDate' defaultValuevalue={courseBlanks ? courseBlanks.courseDate : ""} contentEditable='true' placeholder='Kurs Tarihi' />
                <input type="text" onChange={handleInputChange} required id='coursePlace' defaultValuevalue={courseBlanks ? courseBlanks.coursePlace : ""} contentEditable='true' placeholder='Kursun Gerçekleşeceği Yer/Mekan' />
                <input type="text" onChange={handleInputChange} required id='courseLink' defaultValue={courseBlanks ? courseBlanks.courseLink : ""} contentEditable='true' placeholder='Kurs Linki' />
                <input type="text" onChange={handleInputChange} required id='courseImg' defaultValue={courseBlanks ? courseBlanks.courseImage : ""} contentEditable='true' placeholder='Kurs Resmi (Link)' />
                <input type="text" onChange={handleInputChange} required id='courseInstructor' defaultValue={courseBlanks ? courseBlanks.courseInstructor : ""} contentEditable='true' placeholder='Kurs Eğitmen(ler)i' />
                <textarea id='courseDescription' required onChange={handleInputChange} defaultValue={courseBlanks ? courseBlanks.courseDescription : ""} contentEditable='true' placeholder='Kurs Açıklaması' />
                <hr />
                <br />
                <button type='submit' className='btn'>Kurs Güncelle</button>
            </form>
        </div>
    )
}

export default CourseEdit