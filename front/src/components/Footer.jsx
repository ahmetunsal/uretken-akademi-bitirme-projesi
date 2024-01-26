import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="logo"></div>
                <div className="footer-menu">
                    <ul>
                        <li><h2>Kurumsal</h2></li>
                        <li>
                            <Link to="/about">Hakkımızda</Link>
                        </li>
                        <li>
                            <Link to="https://www.meram.bel.tr/projeler">Faaliyetlerimiz</Link>
                        </li>
                        <li>
                            <Link to="/sss">Sıkça Sorulan Sorular</Link>
                        </li>
                        <li>
                            <Link to="/contact">İletişim</Link>
                        </li>

                    </ul>
                    <ul>
                        <li><h2>Meram Belediyesi</h2></li>
                        <li>
                            <Link to="https://www.meram.bel.tr/">Hakkımızda</Link>
                        </li>
                        <li>
                            <Link to="https://www.meram.bel.tr/projeler/devam-eden">Faaliyetlerimiz</Link>
                        </li>
                        <li>
                            <Link to="https://www.meram.bel.tr/iletisim">Sıkça Sorulan Sorular</Link>
                        </li>
                        <li>
                            <Link to="https://www.meram.bel.tr/iletisim">İletişim</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='hr'></div>
            <div className="sonsoz">
                <p>Genç Meram, Ahmet Unsal tarafından geliştirilmiştir.</p>
            </div></div>
    )
}

export default Footer