import React, { useState, useEffect } from 'react';
import '../../assets/css/carousel.css';

const images = [
    "https://www.yenimeram.com.tr/wp-content/uploads/2023/10/23/mega-yazilim-akademisi-basliyor-son-basvuru-3-kasim-2883.jpg",
    "https://www.tevetoglu.av.tr/storage/expertise/yapay-zeka.jpg"
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <div className="carousel-container">
            <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`slide-${index}`} className="carousel-image" />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
