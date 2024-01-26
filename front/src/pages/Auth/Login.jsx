import React, { useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ user }) {


  document.title = 'Genç Meram | Giriş Yap';

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate()
  const queryString = window.location.search;

  useEffect(() => {
    if (user) {
      navigate('/');
    }

    if (queryString.includes('registered=true')) {
      toast.success('Kayıt başarılı! Şimdi giriş yap bakalım... 😎');
    } else if (queryString.includes('loggedOut=true')) {
      toast.success('Başarıyla çıkış yaptın! Görüşmek üzere... 👋');
    }
  }, [queryString]);

  function handleRegisterClick() {
    navigate("/register")
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    if (id === 'email') {
      setEmail(value);
    }
    else if (id === 'password') {
      setPassword(value);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };

    fetch('http://localhost:3000/api/auth/login', requestOptions)
      .then(response => response.json())
      .then(async data => {
        if (data.success === false) return toast.error(data.message);
        else if (data.success === true) {
          console.log(data);
          const user = {
            id: data.user.id,
            email: data.user.email,
            displayName: data.user.displayName,
            isAdmin: data.user.isAdmin,
          };
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/');
        }
      });
  }

  return (
    <div className='loginCenter'>
      <div className='loginContainer'>
        <div className='loginImg'>
          <img style={{ width: "200px", height: "120px" }} src="https://www.meram.bel.tr/assets/img/logo.svg" alt="" />
          <i style={{ fontSize: "2em" }} className="fa-solid fa-link mx-2"></i>
          <img width="200px" src="/images/uretkenAkademi.png" alt="" />
        </div>
        <div className='loginForm'>
          <h2 className='loginTitle'>Giriş Yap</h2>
          <form onSubmit={handleFormSubmit}>
            <div className='loginInputContainer'>
              <i className="fa-solid fa-envelope"></i>
              <input id='email' className='loginInput' onChange={handleInputChange} required type='email' placeholder='Email Adresi' />
            </div>
            <div className='loginInputContainer'>
              <i className="fa-solid fa-lock mx-1"></i>
              <input id='password' className='loginInput' onChange={handleInputChange} required type='password' placeholder='Şifre' />
            </div>
            <button type='submit' className='loginButton'>Giriş Yap</button>
            <button type='button' onClick={() => handleRegisterClick()} className='loginRegisterButton'>Hesap Oluştur</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login