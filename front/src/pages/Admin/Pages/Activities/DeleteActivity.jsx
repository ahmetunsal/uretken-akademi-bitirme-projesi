import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function DeleteActivity() {

    const { id } = useParams();
    const navi = useNavigate();

    useEffect(() => {
        navi('/addminn/etkinlik?deleted=true');
    }, []);

    React.useEffect(() => {
        fetch('http://localhost:3000/api/activities/delete/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);

                }
            })
            .catch(err => console.log(err))
    }, []);

  return (
    <div>

    </div>
  )
}

export default DeleteActivity