import React, { useEffect, useState } from 'react'
import NotFound from '../NotFound';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Navigate, useNavigate } from 'react-router-dom';
import MeramAdmin from '../Admin/MeramAdmin';

function Admin() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/api/admins')
                .then(res => res.json())
                .then(data => {
                    const a = data[0].admins || [];
                    console.log(a.includes(user.id));
                    console.log(user.id);
                    if (a.includes(user.id)) {
                        navigate('/addminn?isAuth=true');
                    } else {
                        return <NotFound />;
                    }
                });
    }, [user]);



    return (
        <div>

        </div>
    )
}

export default Admin