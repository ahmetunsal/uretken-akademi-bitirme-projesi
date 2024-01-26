import React from 'react'
import '../../../../assets/css/add_activity.css'
import { ToastContainer, toast } from 'react-toastify';

function AddActivity() {


    document.title = 'Etkinlik Ekle | Admin Paneli'

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

        fetch('http://localhost:3000/api/activities/add', {
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
                <h1>Yeni Etkinlik</h1>
            </div>
            <form onSubmit={handleSubmit} className="new-activity-form">
                <label htmlFor="activityName">Etkinlik Adı</label>
                <input onChange={handleInputChange} id='activityName' required type="text" placeholder="Etkinlik Adı" />

                <label htmlFor="activityPlace">Etkinlik Yeri</label>
                <input onChange={handleInputChange} id='activityPlace' required type="text" placeholder="Etkinlik Yeri" />

                <label htmlFor="activityTag">Etkinlik Konusu</label>
                <input onChange={handleInputChange} id='activityTag' required type="text" placeholder="Etkinlik Konusu (Örn. Yazılım)" />

                <label htmlFor="activityImage">Etkinlik Resmi</label>
                <input onChange={handleInputChange} id='activityImage' required type="text" placeholder="Etkinlik Resmi (Link)" />

                <label htmlFor="activityURL">Etkinlik Form Linki</label>
                <input onChange={handleInputChange} id='activityURL' type="text" placeholder="Etkinlik Form Linki (OPSIYONEL) (Kendi form sistemimizi kullanmak istemeyenler için)" />

                <label htmlFor="activityDate">Etkinlik Tarihi</label>
                <input onChange={handleInputChange} id='activityDate' required type="datetime-local" placeholder="Etkinlik Tarihi" />

                <label htmlFor="activityDescription">Etkinlik Açıklaması</label>
                <textarea onChange={handleInputChange} id='activityDescription' required type="text" placeholder="Etkinlik Açıklaması" />

                <button type="submit" className="btn btn-success">Etkinlik Ekle</button>
            </form>
            <div style={{ textAlign: "center" }}>
                <hr />
                <p>&copy; {date} - Bu website Ahmet Ünsal Tarafından Geliştirilmiştir.</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddActivity