import React, { useState } from 'react'
import Navi from '../../components/Navi'
import '../../assets/css/portal.css'
import Post from '../../components/Portal/Post';
import Profiles from '../../components/Portal/Profiles';
import Footer from '../../components/Footer';

function Portal({ user }) {

    document.title = 'Genç Meram | Portal'

    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState([]);

    function handleAddLike() {
        setLikes([...likes, 1]);
    }

    return (
        <div>
            <Navi user={user} />
            <div className="container">
                <h1>ÇOK YAKINDA - ÖRNEK GORUNUM</h1>
                <div className="inner-container">
                    <div className="posts">
                        <Post handleAddLike={handleAddLike} />
                        <Post handleAddLike={handleAddLike} />
                        <Post handleAddLike={handleAddLike} />
                        <Post handleAddLike={handleAddLike} />
                    </div>
                </div>
                <br />
            </div>
            <Footer />
        </div>
    )
}

export default Portal