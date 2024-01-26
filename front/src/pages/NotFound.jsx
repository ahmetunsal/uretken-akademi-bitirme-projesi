import React, { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    document.title = 'Genç Meram | Sayfa Bulunamadı';

    // Animasyonlu metni kontrol etmek için bir zamanlayıcı ekleyin
    const animationTimer = setTimeout(() => {
      const textElement = document.getElementById('notFoundText');
      const textElementt = document.getElementById('notFoundTextt');
      if (textElement) {
        textElement.style.opacity = '0';
      }
    }, 3000);

    const animationTimerr = setTimeout(() => {
      const textElementt = document.getElementById('notFoundTextt');
      if (textElementt) {
        textElementt.style.opacity = '1';
      }
    }, 3000);

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Sağ tıklama olayını dinleyiciyi ekleyin
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(animationTimerr);
      document.removeEventListener('contextmenu', handleContextMenu);
    }
  }, []);

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      {/* Deniz manzarası videosunu ekleyin */}
      <video onContextMenu={() => {return false}} autoPlay loop muted  style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}>
        <source src="/ocean.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animasyonlu metin */}
      <h1 id="notFoundText" style={{
        position: 'absolute',
        zIndex: 1,
        fontSize: '10em',
        color: 'white',
        transition: 'opacity 1s', // Animasyonlu geçiş
      }}>
        404 Sayfa Bulunamadı
      </h1>
      <p id="notFoundTextt" style={{
        position: 'absolute',
        zIndex: 1,
        fontSize: '2em',
        opacity: '0',
        transition: 'opacity 1s', // Animasyonlu geçiş
      }}>
        Biraz dinlen...
      </p>
    </div>
  );
}

export default NotFound;
