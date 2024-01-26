import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    document.title = 'Genç Meram | Kayıt Ol';

    const [email, setEmail] = React.useState('');
    const [displayName, setDisplayName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordRepeat, setPasswordRepeat] = React.useState('');

    function handleInputChange(e) {
        const { id, value } = e.target;
        if (id === 'email') {
            setEmail(value);
        }
        else if (id === 'displayName') {
            setDisplayName(value);
        }
        else if (id === 'password') {
            setPassword(value);
        }
        else if (id === 'passwordRepeat') {
            setPasswordRepeat(value);
        }
        console.log(email, displayName, password, passwordRepeat);
    }

    const navigate = useNavigate();
    function handleFormSubmit(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, passwordRepeat, displayName })
        };

        fetch('http://localhost:3000/api/auth/register', requestOptions)
            .then(response => response.json())
            .then(async data => {
                if(data.success === false) return toast.error(data.message);
                else if(data.success === true) {
                    navigate('/login?registered=true');
                }
            });
    }
    
    return (

        <div className='registerCenter'>
            <div className='registerContainer'>
                <div className='registerImg'>
                    <img style={{ width: "200px", height: "120px" }} src="https://www.meram.bel.tr/assets/img/logo.svg" alt="" />
                    <i style={{ fontSize: "2em" }} className="fa-solid fa-link mx-2"></i>
                    <img width="200px" src="/images/uretkenAkademi.png" alt="" />
                </div>
                <div className='registerForm'>
                    <h2 className='registerTitle'>Kayıt Ol</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className='registerInputContainer'>
                            <i className="fa-solid fa-envelope"></i>
                            <input id='email' onChange={handleInputChange} className='registerInput' required type='email' placeholder='Email Adresi' />
                        </div>
                        <div className='registerInputContainer'>
                            <i className="fa-solid fa-user"></i>
                            <input id='displayName' onChange={handleInputChange} className='registerInput' required type='text' placeholder='Görünen Ad' />
                        </div>
                        <div className='registerInputContainer'>
                            <i className="fa-solid fa-lock mx-1"></i>
                            <input id='password' onChange={handleInputChange} className='registerInput' required type='password' placeholder='Şifre' />
                        </div>
                        <div className='registerInputContainer'>
                            <i className="fa-solid fa-lock mx-1"></i>
                            <input id='passwordRepeat' onChange={handleInputChange} className='registerInput' required type='password' placeholder='Şifre Tekrar' />
                        </div>
                        <button  className='registerButton'>Kayıt Ol</button>
                        <button onClick={()=> navigate("/login")} className='registerLoginButton'>Giriş Yap</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
            <ToastContainer />
        </div>
    )
}

export default Register