import React, { useEffect, useState } from 'react'
import '../../assets/css/forms.css'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Forms() {

    const [form, setForm] = useState({});
    const [key, setKey] = useState(null);
    const [imageKey, setImageKey] = useState(null);
    const [descriptionKey, setDescriptionKey] = useState(null);
    const [placeKey, setPlaceKey] = useState(null);
    const [activity, setActivity] = useState({});
    // get the 'source' parameter from the query string
    const source = new URLSearchParams(window.location.search).get('source');
    const { id } = useParams();
    const navi = useNavigate();


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

        fetch('http://localhost:3000/api/forms/' + id, {
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
                    document.querySelector('.forrmm').reset();
                    toast.success('Form başarıyla gönderildi! Ana ekrana yönlendiriliyorsunuz.')
                    setTimeout(() => {
                        navi('/')
                    }, 3000)
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`http://localhost:3000/api/${source}/${id}`)
            .then(res => res.json())
            .then(data => {
                setForm(data);
            })
            .catch(error => {
                console.error('Error fetching form:', error);
            });

        if (source === 'activities') {
            setKey('activityName')
            setImageKey('activityImage')
            setDescriptionKey('activityDescription')
            setPlaceKey('activityPlace')
        } else if (source === 'courses') {
            setKey('courseName')
            setImageKey('courseImage')
            setDescriptionKey('courseDescription')
            setPlaceKey('coursePlace')
        } else if (source === 'projects') {
            setKey('projectName')
            setImageKey('projectImage')
            setDescriptionKey('projectDescription')
            setPlaceKey('projectPlace')
        } else if (source === 'teams') {
            setKey('teamName')
            setImageKey('teamImage')
            setDescriptionKey('teamDescription')
            setPlaceKey('teamPlace')
        }

        console.log(key)
    }, []);

    useEffect(() => {
        console.log(form)
        document.title = 'Form - ' + form[key] || 'Form'
    }, [form])


    return (
        <div className='general-form'>
            <div className="form-info">
            <h1>{form[key]} </h1>
                <div className="form-image">
                    <img style={{ objectFit: "cover", width: "360px", height: "190px" }} src={form[imageKey] || "https://www.meram.bel.tr/upload/medya/2_215.jpg"} alt="" />
                </div>
                <div className="form-details">
                    <p>Yer: {form[placeKey]}</p>
                    <p>
                        {form[descriptionKey]}
                    </p>
                </div>
            </div>
            <div className="form-apply">
                <form className='forrmm' onSubmit={handleSubmit}>
                    <label htmlFor="name">Ad Soyad</label>
                    <input onChange={handleInputChange} required id='name' type="text" placeholder='Ad Soyad' />

                    <label htmlFor="email">E-Posta</label>
                    <input onChange={handleInputChange} required id='email' type="email" placeholder='E-Posta' />

                    <label htmlFor="phone">Telefon</label>
                    <input onChange={handleInputChange} required id='phone' type="number" placeholder='Telefon' />
                    
                    <label htmlFor="message">Eklemek istediğiniz bir şey var mı?</label>
                    <textarea onChange={handleInputChange} id="message" required name="message" placeholder='Eklemek istediğiniz bir şey var mı?'></textarea>

                    <button type='submit'>Gönder</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Forms