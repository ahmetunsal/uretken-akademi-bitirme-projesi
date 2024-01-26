import React from 'react'
import '../../../../assets/css/add_activity.css'
import { ToastContainer, toast } from 'react-toastify';

function AddCourse() {


    document.title = 'Kurs Ekle | Admin Paneli'

    const [activity, setActivity] = React.useState();
    const date = new Date().getFullYear();

    function handleInputChange(e) {
        const { id, value, type } = e.target;
        setActivity(prev => {
            return {
                ...prev,
                [id]: type === 'datetime-local' ? new Date(value).getTime() : value
            }
        });
        console.log({ [id]: type === 'datetime-local' ? new Date(value).getTime() : value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/api/courses/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    // delete the form
                    document.querySelector('.new-activity-form').reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='add-activity-container'>
            <div className="add-activity-header">
                <h1>Yeni Kurs</h1>
            </div>
            <form onSubmit={handleSubmit} className="new-activity-form">
                <label htmlFor="courseName">Kurs Adı</label>
                <input onChange={handleInputChange} id='courseName' required type="text" placeholder="Kurs Adı" />

                <label htmlFor="coursePlace">Kurs Yeri</label>
                <input onChange={handleInputChange} id='coursePlace' required type="text" placeholder="Kurs Yeri" />

                <label htmlFor="courseTag">Kurs Konusu</label>
                <input onChange={handleInputChange} id='courseTag' required type="text" placeholder="Kurs Konusu (Örn. Yazılım)" />

                <label htmlFor="courseImg">Kurs Resmi</label>
                <input onChange={handleInputChange} id='courseImg' required type="text" placeholder="Kurs Resmi (Link)" />

                <label htmlFor="courseLevel">Kurs Seviyesi</label>
                <input onChange={handleInputChange} id='courseLevel' type="text" placeholder="Kurs Seviyesi (Temel, Orta, İleri)" />

                <label htmlFor="courseFacilities">Kurs Olanakları</label>
                <input onChange={handleInputChange} id='courseFacilities' type="text" placeholder="Kurs Olanakları (İstihdam, Etkinlikler)" />

                <label htmlFor="courseLink">Kurs Form Linki</label>
                <input onChange={handleInputChange} id='courseLink' type="text" placeholder="Kurs Form Linki (OPSIYONEL) (Kendi form sistemimizi kullanmak istemeyenler için)" />

                <label htmlFor="courseDate">Kurs Tarihi</label>
                <input onChange={handleInputChange} id='courseDate' required type="datetime-local" placeholder="Kurs Tarihi" />

                <label htmlFor="courseDescription">Kurs Açıklaması</label>
                <textarea onChange={handleInputChange} id='courseDescription' required type="text" placeholder="Kurs Açıklaması" />

                <button type="submit" className="btn btn-success">Kurs Ekle</button>
            </form>
            <div style={{ textAlign: "center" }}>
                <hr />
                <p>&copy; {date} - Bu website Ahmet Ünsal Tarafından Geliştirilmiştir.</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddCourse