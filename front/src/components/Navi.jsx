import React from 'react'
import '../assets/css/navi.css'
import { Link } from 'react-router-dom'

function Navi({ user }) {

    const [courses, setCourses] = React.useState([]);
    const [activities, setActivities] = React.useState([]);

    function handleInputChange(e) {
        // get the courses and activities that match the search query
        const { value } = e.target;

        fetch('http://localhost:3000/api/courses/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data.filter(course => course.courseName.toLowerCase().includes(value.toLowerCase())))
            })
            .catch(err => console.log(err))

        fetch('http://localhost:3000/api/activities/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setActivities(data.filter(activity => activity.activityName.toLowerCase().includes(value.toLowerCase())))
            })
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        fetch('http://localhost:3000/api/courses/')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.log(err))

        fetch('http://localhost:3000/api/activities/')
            .then(res => res.json())
            .then(data => setActivities(data))
            .catch(err => console.log(err))
    }, []);

    function handleSearchClick(e) {
        e.preventDefault();
        console.log(e.target)
        const searchList = document.getElementById('search-res');
        searchList.style.display = 'flex';
        console.log(searchList)
    }


    return (
        <>
            <div className="nav-info">
                <div className="nav-info-left">
                    Genç Meram'a hoşgeldiniz!
                </div>
                <div className="nav-info-right">
                    <Link to="/about">Hakkımızda</Link>
                    <Link to={`https://www.meram.bel.tr/projeler`}>Faaliyetlerimiz</Link>
                    <Link to="/sss">SSS</Link>
                    <Link to="/contact">İletişim</Link>
                    <a href="https://www.facebook.com/gencmeram" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/gencmeram" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram-square"></i>
                    </a>
                    <a href="https://www.x.com/gencmeram" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.youtube.com/@merambelediyesi" target="_blank" rel="noreferrer">
                        <i className="fab fa-youtube-square"></i>
                    </a>
                </div>
            </div>

            <div className="nav">
                <div className='logo'>
                    <Link to="/">
                        <img width={60} src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="Genç Meram" />
                    </Link>
                    <h6 className='nav-header'>GENÇ <br /> MERAM</h6>
                    <div className="nav-menu-right">
                        <Link to="/portal">Portal</Link>
                        <Link to="/courses">Eğitimler</Link>
                        <Link to="/activities">Etkinlikler</Link>
                        <Link to="/teams">Takımlar</Link>
                    </div>
                </div>
                <div className="nav-menu">
                    <form className='search'>
                        <input onClick={handleSearchClick} type="text" className="search-input" placeholder="Ara" aria-label="Ara" aria-describedby="button-addon2" />
                        <button className="search-button" type="submit">
                            <i className="fas fa-search"></i>
                        </button>

                    </form>
                    {
                        !user ?
                            <Link className='user' to="/login">
                                <i className="fas fa-user d-inline-block"></i>
                                <p>Giriş Yap</p>
                            </Link>
                            :
                            <div className="user">
                                <div className="user-info">
                                    <i className="fas fa-user d-inline-block"></i>
                                    <p>{user.displayName}</p>
                                </div>

                                <div className="user-menu">
                                    <Link to="/profile">
                                        <i className="fas fa-user d-inline-block"></i>
                                        <p>Profil</p>
                                    </Link>
                                    <Link to="/portal">
                                        <i className="fa-regular fa-face-smile"></i>
                                        <p>Portal</p>
                                    </Link>
                                    <Link to="/logout">
                                        <i className="fa-solid fa-right-to-bracket"></i>
                                        <p>Çıkış Yap</p>
                                    </Link>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navi