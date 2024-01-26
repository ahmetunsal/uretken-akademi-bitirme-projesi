import React from 'react'
import '../../../../assets/css/add_activity.css'
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function AddTrainer() {


    document.title = 'Eğitmen Ekle | Admin Paneli'
 
    const [activity, setActivity] = React.useState();
    const { id } = useParams();
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

        fetch(`http://localhost:3000/api/courses/${id}/trainers/add`, {
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
                    console.log(data)
                    document.querySelector('.new-activity-form').reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='add-activity-container'>
            <div className="add-activity-header">
                <h1>Yeni Eğitmen</h1>
            </div>
            <form onSubmit={handleSubmit} className="new-activity-form">
                <label htmlFor="trainerName">Ders Adı</label>
                <input onChange={handleInputChange} id='trainerName' required type="text" placeholder="Eğitmen Adı" />

                <label htmlFor="trainerPhoto">Ders Videosu</label>
                <input onChange={handleInputChange} id='trainerPhoto' required type="text" placeholder="Eğitmen Profil Resmi Linki" />
                
                <button type="submit" className="btn btn-success">Eğitmen Ekle</button>
            </form>
            <div style={{ textAlign: "center" }}>
                <hr />
                <p>&copy; {date} - Bu website Ahmet Ünsal Tarafından Geliştirilmiştir.</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddTrainer