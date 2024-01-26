import React, { useEffect, useState } from 'react'
import '../../../assets/css/activities.css'
import { Link, useParams } from 'react-router-dom'
import AdminActivityCard from '../../../components/Cards/AdminActivityCard';
import { ToastContainer, toast } from 'react-toastify';

function Activities() {


    document.title = 'Etkinlikler | Admin Paneli'

    const [activities, setActivities] = useState([]);
    const [forms, setForms] = useState([]);
    const [applicants, setApplicants] = useState([]);
    const { deleted } = useParams();

    useEffect(() => {
        if (deleted) {
            toast.success('Etkinlik başarıyla silindi.')
        }
        fetch('http://localhost:3000/api/activities')
            .then(response => response.json())
            .then(json => setActivities(json))

        fetch('http://localhost:3000/api/forms')
            .then(response => response.json())
            .then(json => setForms(json))
    }, []);

    useEffect(() => {
        console.log(forms)
        for (const form of forms) {
            setApplicants(form.formAppliciants)
        }
    }, [forms]);

    return (
        <div className='activities-container'>
            <div className="activities-list">
                <div className="all-activities">
                    <div className="activities-header">
                        <h1>Etkinlikler</h1>
                        <Link to="/addminn/etkinlik/ekle" className="btn btn-success">
                            <i class="fa-solid fa-plus"></i>
                            Yeni Etkinlik
                        </Link>
                    </div>
                    <div className="activities-insight">
                        <div className="insight">
                            <p>
                                Toplam Etkinlik Sayısı
                                <br />
                                <span style={activities.length === 0 ? { color: "red" } : {}}>{activities.length}</span>
                            </p>
                        </div>
                        <div className="insight">
                            <p>
                                Toplam Katılımcı Sayısı
                                <br />
                                <span>{applicants.length} </span>
                            </p>
                        </div>
                    </div>
                    {
                        activities.map((activity) => (
                            <AdminActivityCard key={activity.id} activity={activity} />
                        ))
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Activities