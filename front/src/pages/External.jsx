import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/external.css'

function External() {

    // set the page title
    document.title = 'Genç Meram | Harici Bağlantı';

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const link = query.get('link');
    const [timeout, setTimeouts] = useState(5);
    const [redirect, setRedirect] = useState(true);

    if (link.startsWith('http://')) {
        setRedirect(false);
        return (
            <div className='external-container'>
                <i className="fa-solid fa-circle-exclamation"></i>
                <p><span>DIKKAT!</span> Güvenli olmayan bir siteye yönlendiriliyorsunuz. Gitmek istediğiniz site </p>
                <a href={link}><span>{link}</span></a>
                <p>adresinde bulunuyor.</p>
                <p>Kişisel verilerinizi bu site ile paylaşmamanızı öneririz.</p>
                <div className="btns">
                    <Link to={`/`} className='btn btn-success'>Sayfaya geri dön</Link>
                    <a href={link} className='btn btn-danger-outlined'>Git</a>
                </div>
            </div>
        )
    } else {
        useEffect(() => {
            setInterval(() => {
                setTimeouts(timeout - 1);
            }, 1000);
            setTimeout(() => {
                if (redirect) {
                    window.location.replace(link)
                } else {
                    return;
                }
            }, 5000);
        }, [redirect, timeout])
    }

    return (
        <div className='external-container'>
            <i class="fa-solid fa-circle-check"></i>
            <p><span>DIKKAT!</span> Gitmek istediğiniz site </p>
            <a href={link}>{link}</a>
            <p>adresinde bulunuyor.</p>
            <br />
            <p>{timeout} saniye sonra sayfaya yönlendiriliyorsunuz.</p>
            <div className="btns">
                <Link to={`/`} onClick={() => { setRedirect(false) }} className='btn btn-success'>Sayfaya geri dön</Link>
                <a href={link} className='btn btn-success-outlined'>Git</a>
            </div>
        </div>
    )
}

export default External
