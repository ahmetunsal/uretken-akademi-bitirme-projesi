import React from 'react'
import EventCard from '../../components/Events/EventCard'
import Navi from '../../components/Navi'
import Footer from '../../components/Footer'
import '../../assets/css/events.css'

function Events({ user }) {


    document.title = 'Genç Meram | Etkinlikler'

    const [activities, setActivities] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/api/activities')
            .then(response => response.json())
            .then(json => setActivities(json))
    }, []);


    return (
        <div>
            <Navi user={user} />
            <div className='events-container'>
                {/**<h1>ÇOK YAKINDA - ÖRNEK GORUNUM</h1> */}
                <div className="events-info">
                    <h2>Etkinlikler</h2>
                    <div className="eventss">
                        {
                            !(activities.length === 0) ?
                                activities.map((activity) => (
                                    <EventCard key={activity.id} activity={activity} />
                                ))
                                :
                                <h1 style={{ display: "flex", width: "100%", height: "50vh", justifyContent: "center", alignItems: "center" }}>Etkinlik Bulunmamakta.</h1>
                        }
                    </div>
                </div>
                <br />
                <Footer />
            </div>
        </div>
    )
}

export default Events