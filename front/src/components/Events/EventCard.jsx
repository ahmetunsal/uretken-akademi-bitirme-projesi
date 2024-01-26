import React from 'react'
import '../../assets/css/event_card.css'
import { Link } from 'react-router-dom'


function EventCard({ activity }) {

    // calculate the date from the activity and return it as a string as "DD MMMM YYYY"
    const calculateDate = (date) => {
        const eventDate = new Date(date)
        const day = eventDate.getDate()
        const month = eventDate.toLocaleString('default', { month: 'long' })
        const year = eventDate.getFullYear()
        return `${day} ${month} ${year}`
    }


    return (
        <div className='event'>
            <div  className='txt-dec-none'>
                <div className="event-img">
                    <img style={{ objectFit: "contain", width: "390px" }} src={activity.activityImage ? activity.activityImage : "https://www.meram.bel.tr/upload/medya/2_215.jpg"} alt="" />
                </div>
                <div className="event-header">
                    <h3>{activity.activityName} </h3>
                    <p>{activity.activityTag} </p>
                </div>
                <div className="event-info">
                    <p>{calculateDate(activity.activityDate)} </p>
                </div>
            </div>
            <div className='event-footer'>
                {
                    activity.activityURL ?
                        <Link to={`/external?link=${activity.activityURL}`} target='_blank' rel="noreferrer" className='event-button'>Katıl</Link>
                        : <Link to={`/forms/${activity.id}?source=activities`} type='button' className='event-button'>Katıl</Link>
                }
                <button type='button' className='fas fa-heart btn-emo'></button>
            </div>
        </div>
    )
}

export default EventCard