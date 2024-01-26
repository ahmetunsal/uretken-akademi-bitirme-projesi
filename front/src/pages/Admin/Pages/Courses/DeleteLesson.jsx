import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function DeleteLesson() {

    const { id, lessonId } = useParams();
    const [isDeleted, setIsDeleted] = React.useState(false);
    const navi = useNavigate();

    useEffect(() => {
        if(isDeleted){
            navi(`/addminn/kurs/detay/${id}/?deleted=true`);
        }
    }, [isDeleted]);

    React.useEffect(() => {
        fetch(`/courses/${id}/lesson/delete/${lessonId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    setIsDeleted(true);
                }
            })
            .catch(err => console.log(err))
    }, []);

  return (
    <div>
        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Yükleniyor</h1>
        <ToastContainer />
    </div>
  )
}

export default DeleteLesson