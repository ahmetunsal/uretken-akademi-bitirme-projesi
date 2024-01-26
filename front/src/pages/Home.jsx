import React, { useEffect, useState } from 'react'
import Navi from '../components/Navi'
import '../assets/css/home.css'
import Feed from '../components/Home/Feed'
import Footer from '../components/Footer'

function Home({ user }) {

    document.title = 'Genç Meram | Anasayfa'; 

    return (
        <div>
            <Navi user={user} />
            <Feed user={user} />
            <Footer />
        </div>
    )
}

export default Home