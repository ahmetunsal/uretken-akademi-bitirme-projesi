import React, { useEffect } from 'react'
import '../../../../assets/css/add_activity.css'
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function UpdateActivity() {


    document.title = 'Etkinlik Güncelle | Admin Paneli' 

    const [defaultActivity, setDefaultActivity] = React.useState(null);
    const [activity, setActivity] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const { id } = useParams();
    const date = new Date().getFullYear();


    React.useEffect(() => {
        fetch('http://localhost:3000/api/activities/' + id)
            .then(response => response.json())
            .then(async json => {
                //console.log(json)
                setDefaultActivity(json)
            })
    }, [id]);

    React.useEffect(() => {
        if (defaultActivity) {
            setActivity(defaultActivity)
            setLoading(false)
        }
    }, [defaultActivity]);



    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>Yükleniyor...</h1>
            </div>
        )
    }


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

        fetch('http://localhost:3000/api/activities/update/' + id, {
            method: 'PUT',
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
                <h1>{defaultActivity.activityName} </h1>
            </div>
            <form onSubmit={handleSubmit} className="new-activity-form">
                <label htmlFor="activityName">Etkinlik Adı</label>
                <input onChange={handleInputChange} id='activityName' required defaultValue={defaultActivity.activityName} type="text" placeholder="Etkinlik Adı" />

                <label htmlFor="activityPlace">Etkinlik Yeri</label>
                <input onChange={handleInputChange} id='activityPlace' required defaultValue={defaultActivity.activityPlace} type="text" placeholder="Etkinlik Yeri" />

                <label htmlFor="activityTag">Etkinlik Konusu</label>
                <input onChange={handleInputChange} id='activityTag' required defaultValue={defaultActivity.activityTag} type="text" placeholder="Etkinlik Konusu (Örn. Yazılım)" />

                <label htmlFor="activityImage">Etkinlik Resmi</label>
                <input onChange={handleInputChange} id='activityImage' required defaultValue={defaultActivity.activityImage} type="text" placeholder="Etkinlik Resmi (Link)" />

                <label htmlFor="activityDate">Etkinlik Tarihi</label>
                <input onChange={handleInputChange} id='activityDate' required defaultValue={defaultActivity.activityDate} type="datetime-local" placeholder="Etkinlik Tarihi" />

                <label htmlFor="activityDescription">Etkinlik Açıklaması</label>
                <textarea onChange={handleInputChange} id='activityDescription' required defaultValue={defaultActivity.activityDescription} type="text" placeholder="Etkinlik Açıklaması" />

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

export default UpdateActivity