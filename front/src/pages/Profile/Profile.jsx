import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../assets/css/profile.css'
import Navi from '../../components/Navi';

function Profile() {

    const [user, setUser] = React.useState([]);
    const [form, setForm] = React.useState([]);
    const [img, setImg] = React.useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);


    function handleModal() {
        var modal = document.querySelector('.modal');
        modal.style.display = "block";
    }

    function closeModal() {
        var modal = document.querySelector('.modal');
        modal.style.display = "none";
    }

    function handleInputChange(e) {
        const { id, value, type } = e.target;
        setForm(prev => {
            // if the value is ends with .jpg or .png or .jpeg
            if (value.endsWith('.jpg') || value.endsWith('.png') || value.endsWith('.jpeg')) {
                setImg(value)
            }
            return {
                ...prev,
                [id]: value ? new Date(value).getTime() : value
            }
        });
        console.log({ [id]: type === 'datetime-local' ? new Date(value).getTime() : value })
    }

    return (
        <div className='profile-container'>
            <div className="profile-general-info">
                <div className="profile-general-info-left">
                    <img width={100} src="/uploads/user-avatar.png" alt="" />
                    <h2>{user.displayName} </h2>
                </div>
                <div className="profile-general-info-right">
                    <button type="button" onClick={handleModal} className='btn btn-success'>
                        <i className='fab fa-plus'></i>
                        Yeni Gönderi
                    </button>
                </div>
            </div>
            <div className="modal">
                <div className="modal-content">
                    <span onClick={closeModal} className="close">
                        <i style={{ fontSize: "20px" }} class="fa-solid fa-circle-xmark"></i>
                    </span>
                    <div className="modal-content-header">
                        <form>
                            <img style={{ borderRadius: "10px" }} width={400} src={img} alt="" />
                            <input onChange={handleInputChange} id='' type="text" placeholder="Resim Linki" />
                            <input type="text" placeholder="Başlık" />
                            <button style={{ marginTop: "20px" }} type="submit" className="btn btn-success">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile