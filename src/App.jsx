import React, { useState } from 'react';
import './App.css';


const TarotApp = () => {
  const [deck, setDeck] = useState([
    { id: 0, name: 'El Loco', image: 'https://i.ibb.co/L5QNWdQ/El-Loco.png' },
    { id: 1, name: 'El Mago', image: 'https://i.ibb.co/5G2tryV/El-Mago.png' },
    { id: 2, name: 'La Papisa', image: 'https://i.ibb.co/XkkhQth/La-Papisa.png' },
    { id: 3, name: 'La Emperatriz', image: 'https://i.ibb.co/ysHRyq8/La-Emperatriz.png' },
    { id: 4, name: 'El Emperador', image: 'https://i.ibb.co/VLqXt6z/El-Emperador.png' },
    { id: 5, name: 'El Papa', image: 'https://i.ibb.co/41WmdKC/El-Papa.png' },
    { id: 6, name: 'El Enamorado', image: 'https://i.ibb.co/xMmBmZ3/El-Enamorado.png' },
    { id: 7, name: 'El Carro', image: 'https://i.ibb.co/g6nKWnK/El-Carro.png' },
    { id: 8, name: 'La Justicia', image: 'https://i.ibb.co/D7mS4zq/La-Justicia.png' },
    { id: 9, name: 'El Hermitaño', image: 'https://i.ibb.co/ncjLCRw/El-Hermita-o.png' },
    { id: 10, name: 'La Rueda de la Fortuna', image: 'https://i.ibb.co/KbGdMNR/La-Rueda-De-La-Fortuna.png' },
    { id: 11, name: 'La Fuerza', image: 'https://i.ibb.co/1q7QDj6/La-Fuerza.png' },
    { id: 12, name: 'El Colgado', image: 'https://i.ibb.co/4JcWsW5/El-Colgado.png' },
    { id: 13, name: 'El Arcano sin Nombre', image: 'https://i.ibb.co/t4VNN5N/El-Arcano-Sin-Nombre.png' },
    { id: 14, name: 'Templanza', image: 'https://i.ibb.co/jwbGxX6/Templanza.png' },
    { id: 15, name: 'El Diablo', image: 'https://i.ibb.co/CnNXLjm/El-Diablo.png' },
    { id: 16, name: 'La Casa de Dios', image: 'https://i.ibb.co/BzP9nzK/La-Casa-De-Dios.png' },
    { id: 17, name: 'La Estrella', image: 'https://i.ibb.co/Sm4p7n3/Las-Estrellas.png' },
    { id: 18, name: 'La Luna', image: 'https://i.ibb.co/Yk26FMG/La-Luna.png' },
    { id: 19, name: 'El Sol', image: 'https://i.ibb.co/SKrbZsK/El-Sol.png' },
    { id: 20, name: 'El Juicio', image: 'https://i.ibb.co/MgbHhQT/El-Juicio.png' },
    { id: 21, name: 'El Mundo', image: 'https://i.ibb.co/N6RmZJN/El-Mundo.png' },
  ]);

  const [drawnCards, setDrawnCards] = useState([]);

  const drawCard = () => {
    // Elegir una carta al azar del mazo
    const randomIndex = Math.floor(Math.random() * deck.length);
    const selectedCard = deck[randomIndex];

    // Eliminar la carta seleccionada del mazo para que no se repita
    const newDeck = deck.filter(card => card.id !== selectedCard.id);
    setDeck(newDeck);

    // Agregar la carta seleccionada a la lista de cartas sacadas
    setDrawnCards(prevDrawnCards => [...prevDrawnCards, selectedCard]);
  };

  return (
    <div >
      {/* Mostrar la carta de reverso */}
      <div onClick={drawCard} style={{ cursor: 'pointer' }}>
        <img className='carta-reverso' src="https://i.ibb.co/ZMzK1Kx/Reverso.png" alt="Carta de reverso" />
      </div>

      {/* Mostrar las cartas sacadas */}
      <div className='cartas-horizontal'>
        {drawnCards.map(card => (
          <div key={card.id}>
            <img className='carta-frente'     src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotApp;
