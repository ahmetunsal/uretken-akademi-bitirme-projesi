import React from 'react'
import { Link } from 'react-router-dom'

function AdminCourseCard({ activity }) {
    return (
        <div key={activity.id} className="activity-card" style={{ marginTop: "10px" }}> 
            <Link to={`/addminn/kurs/detay/${activity.id}`} className="activity-header">
                <img src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="" />
                <h3 >{activity.courseName} </h3>
            </Link>
            <div className="activity-options">
                <Link to={`/addminn/kurs/duzenle/${activity.id}`} className="btn btn-primary">
                    <i class="fa-solid fa-pen"></i>
                    Düzenle
                </Link>
                <Link to={`/addminn/kurs/sil/${activity.id}`} className="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                    Sil
                </Link>
            </div>
        </div>
    )
}

export default AdminCourseCard