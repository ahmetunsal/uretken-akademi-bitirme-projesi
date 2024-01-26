import React, { useEffect } from 'react'
import '../../../../assets/css/info_activity.css'
import { useParams } from 'react-router-dom';

function InfoActivity() {


    document.title = 'Etkinlik Bilgileri'

    const [activity, setActivity] = React.useState([]);
    const [forms, setForms] = React.useState([]);
    const [applicants, setApplicants] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const { id } = useParams();

    React.useEffect(() => {
        fetch('http://localhost:3000/api/activities/' + id)
            .then(response => response.json())
            .then(json => {
                setActivity(json)
                setLoading(false)
            })

        fetch('http://localhost:3000/api/forms/'+ id)
            .then(response => response.json())
            .then(json => setForms(json))
    }, [id]);

    useEffect(() => {
        //console.log(forms)
        for (const form of forms) {
            setApplicants(form.formAppliciants)
        }
    }, [forms]);

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>Yükleniyor...</h1>
            </div>
        )
    }

    return (
        <div>
            <div className="info-activity-container">
                <div className="info-activity">
                    <div className="info-activity-header">
                        <h1>{activity.activityName} </h1>
                    </div>
                    <div className="info-acitivity-applicants">
                        <h2>Katılımcılar {applicants.length === 0 ? "" : `: ${applicants.length}`}</h2>
                        <div className="applicants">
                            {
                                applicants.length === 0 ? <h3>Katılımcı bulunmamaktadır.</h3> :
                                applicants.map((applicant) => (
                                    <div key={applicant.id} className="applicant">
                                        <div className="applicant-info">
                                            <ul>
                                                <li>{applicant.name}</li>
                                                <li>{applicant.email}</li>
                                                <li>{applicant.phone}</li>
                                                <li>{applicant.message}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoActivity