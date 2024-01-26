import React from 'react'
import '../../assets/css/contact.css'
import Navi from '../../components/Navi'
import Footer from '../../components/Footer'
import { ToastContainer, toast } from 'react-toastify'

function Contact({ user }) {

    document.title = 'Genç Meram | İletişim'
    const [form, setForm] = React.useState({});


    function handleInputChange(e) {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    }

    function onSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
            .then(response => response.json())
            .then(data => {
                toast.success(data.message);
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <Navi user={user} />
            <div className='events-container'>
                <form onSubmit={onSubmit} className='forrrrmmm'>
                    <div className="form-group">
                        <h1 style={{ marginTop: "30px" }}>İletişim</h1>
                        <label htmlFor="name">Adınız</label>
                        <input onChange={handleInputChange} type="text" className="form-control" id="name" placeholder="Adınız" />
                        <label htmlFor="email">E-posta Adresiniz</label>
                        <input onChange={handleInputChange} type="email" className="form-control" id="email" placeholder="E-posta Adresiniz" />
                        <label htmlFor="message">Mesajınız</label>
                        <textarea onChange={handleInputChange} className="form-control" id="message" rows="3"></textarea>
                        <button  type="submit" className="btn btn-primary">Gönder</button>
                    </div>
                </form>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Contact