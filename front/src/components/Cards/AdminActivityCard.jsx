import React from 'react'
import { Link } from 'react-router-dom'

function AdminActivityCard({ activity }) {
    return (
        <div key={activity.id} className="activity-card" style={{ marginTop: "10px" }}> 
            <Link to={`/addminn/etkinlik/detay/${activity.id}`} className="activity-header">
                <img src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="" />
                <h3 >{activity.activityName} </h3>
            </Link>
            <div className="activity-options">
                <Link to={`/addminn/etkinlik/duzenle/${activity.id}`} className="btn btn-primary">
                    <i class="fa-solid fa-pen"></i>
                    Düzenle
                </Link>
                <Link to={`/addminn/etkinlik/sil/${activity.id}`} className="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                    Sil
                </Link>
            </div>
        </div>
    )
}

export default AdminActivityCard