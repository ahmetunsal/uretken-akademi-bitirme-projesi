import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {


    const navigate = useNavigate();


    useEffect(() => {
        localStorage.removeItem('user');
        navigate('/login?loggedOut=true');
    }, []);

    return (
        <div>

        </div>
    )
}

export default Logout