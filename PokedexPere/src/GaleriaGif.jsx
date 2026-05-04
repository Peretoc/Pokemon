import { useState, useEffect } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    color: 'white',
    marginBottom: '30px',
    fontSize: '2.5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  galleryWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '600px',
  },
  gifDisplay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    height: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
    background: '#f0f0f0',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  gifImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    animation: 'fadeIn 0.3s ease-in-out',
  },
  noGifs: {
    color: 'white',
    fontSize: '1.2rem',
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    textAlign: 'center',
  },
};

const Buscarpok = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gifs, setGifs] = useState([]);

  // Cargar los gifs desde la carpeta assets/gifs
  useEffect(() => {
    const loadGifs = async () => {
      // Importar todos los gifs de la carpeta
      const gifFiles = import.meta.glob('/src/assets/gifs/*', { eager: true });
      const gifArray = Object.values(gifFiles).map((module) => module.default);
      setGifs(gifArray);
    };
    loadGifs();
  }, []);

  // Cambiar de gif cada 15 segundos
  useEffect(() => {
    if (gifs.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [gifs]);

  return (
    <div style={styles.container}>
      {gifs.length > 0 ? (
        <div style={styles.galleryWrapper}>
          <div style={styles.gifDisplay}>
            <img
              src={gifs[currentIndex]}
              alt={`Gif ${currentIndex + 1}`}
              style={styles.gifImage}
            />
          </div>
        </div>
      ) : (
        <p style={styles.noGifs}>No hay gifs disponibles. Agrega algunos gifs a /assets/gifs</p>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Buscarpok;
