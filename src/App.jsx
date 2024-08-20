import React, { useState } from 'react';
import './App.css';


const TarotApp = () => {
  const [deck, setDeck] = useState([
    { id: 0, name: 'El Loco', description:'Energía Original. Indefinición, Libertad. Locura, Caos, Hombre que Marcha hacia la Evolución. Nómada, Anarquía. deseo. Dimensión Infinita. Delirio. aspiración a la luz y a la vida eterna. Busqueda de la verdad. Avanzar hacia el desarrollo de todas las posibilidades humanas. profeta. Porta lo esencial. Visionario.  ', image: 'https://i.ibb.co/L5QNWdQ/El-Loco.png' },
    { id: 1, name: 'El Mago',  description:'Comienzo, todo puede hacerse. Tomar su lugar. Hombre llamado a elevarse. Iniciado. Trabajo. Astucia. Arte de convencer. Espontaneidad. Egoísmo. Inicio de la búsqueda de la Sabiduría perdida. Artista. Juego. Voluntad de crear.',  image: 'https://i.ibb.co/5G2tryV/El-Mago.png' },
    { id: 2, name: 'La Papisa', description:'Msdre divina. Acumulación. Virgen. Iglesia Oculta. Madre Dominadora. Mujer frígida. Secreto conocido para quien lo sabe descifrar. Frialdad. Educación Severa. Iniciatriz. Libros sagrados. Soledad. Silencio. Meditación. rigor. Inhibición. Celibato. Encubrimiento de una obra.',  image: 'https://i.ibb.co/XkkhQth/La-Papisa.png' },
    { id: 3, name: 'La Emperatriz',description:'Impulso creador. Quiere investirse. Fecundidad. Bella mujer. Encarnada. Iniciativa. Gracia. Amante. Actividades productivas. Mano que toma. Mujer célebre o de alto rango. Coquetería. Mujer de negocios.',   image: 'https://i.ibb.co/ysHRyq8/La-Emperatriz.png' },
    { id: 4, name: 'El Emperador',description:'Estabilidad. Padre dominador. Potencia. Base de toda construcción. Eneegía material. Apoyo. Personaje Influyente. Poder sobre el mundo material. Esposo. Potencia sexual. Patriarcado. Jefe de Familia. Fuerza pacificadora.',  image: 'https://i.ibb.co/VLqXt6z/El-Emperador.png' },
    { id: 5, name: 'El Papa',description:'Mediador. Ideal. Sacerdote. Autoridad inspirada. Guía. Poder espiritual. Puente hacia lo sagrado. Fé. Santidad. Alianza. Ritual. Ayuda a la humanidad. Conocimiento. Dogmas. Gran iniciado. Falso Gurú. Matrimonio. Reunir. Padre idealizado. Secreto revelado. Bendición.',  image: 'https://i.ibb.co/41WmdKC/El-Papa.png' },
    { id: 6, name: 'El Enamorado', description:'Unión. Llamado al amor. Alegría. Placer de hacer lo que se ama. Entusiasmo. Belleza. Madre que impide la unión de su hijo con su esposa. Edipo. Incesto. Elección. Tentación. Conflicto amoroso. Incertidumbre. Harmonía.',  image: 'https://i.ibb.co/xMmBmZ3/El-Enamorado.png' },
    { id: 7, name: 'El Carro', description:'Acción en el mundo. Viaje. Obra en movimiento viva y organizada. Triunfo. Amante. Conciencia del cosmos. Talento. Conquista. Artista con éxito. Transmisión de una obra. ',  image: 'https://i.ibb.co/g6nKWnK/El-Carro.png' },
    { id: 8, name: 'La Justicia', description:'Equilibrio Universal. Pesar y cortar. Perfección. Rigor. Madre castradora. Responsabilidad en la libertad. Razón y voluntad. Colaboración en la obra divina. Inflexibilidad. Proceso. Arbitro. Leyes cósmicas. Buenas o malas acciones que nos siguen a través de nuestras existencias sucesivas. Lucidez. Darse a quien lo merece.',  image: 'https://i.ibb.co/D7mS4zq/La-Justicia.png' },
    { id: 9, name: 'El Hermitaño', description:'Avanza sin saber a donde va, pero va. Crisis. Duda y Superación. Prudencia. Sabiduría. Padre ausente. Alcoholismo. Aclara el pasado. Terapeuta. Peregrinaje. Conocimiento de lo oculto. Tiempo. Castidad. Secreto. Estudio de si mismo. ',  image: 'https://i.ibb.co/ncjLCRw/El-Hermita-o.png' },
    { id: 10, name: 'La Rueda de la Fortuna', description:'Fin de ciclo. Rueda universal de las leyes de la naturaleza movida por la providencia. Necesidad de ayuda externa. Ciclo de muertes y renacimientos. Circulación. Alternancia. Inmovilidad que espera la fuerza que vendrá a ponerla en movimiento. Circunstancias. Encarnar lo espiritual y espiritualizar la materia. ',  image: 'https://i.ibb.co/KbGdMNR/La-Rueda-De-La-Fortuna.png' },
    { id: 11, name: 'La Fuerza', description:'Comienzo sobre otro plano. Inicio de un nuevo ciclo. Espíritu que controla el deseo. Harmonía entre intelecto y sexualidad. Conquista por la seducción. Autodisciplina. Magnetismo. Conciencia. Controlar con delizadeza las situaciones agresivas. Masturbación. Inhibiciones sexuales. Fuerza moral. Desprendimiento en la acción. Mujer tímida que le teme al orgasmo. Heroísmo. Conocimiento de sí.',  image: 'https://i.ibb.co/1q7QDj6/La-Fuerza.png' },
    { id: 12, name: 'El Colgado', description:'Alto. Meditación. Feto. Gestación. Don de si. Prueba. Progreso impuesto por el dolor. Llegar al vacío mental. Espera y abnegación. Autocastigo. Se cree muy atado. Amor no compartido. Fuerzas interiores recibidas por la oración. Trabajo sobre si. ',  image: 'https://i.ibb.co/4JcWsW5/El-Colgado.png' },
    { id: 13, name: 'Arcano XIII ', description:'Transformación profunda. Revolución. Eliminación de todo lo que impide avanzar. Fin de una ilusión. Transmutación. Cataclismo. Muerte. Perdida. Cosechas. Ataque. Cólera. Odio familiar. Fin de algo. Enfermedad grave. Sadismo. Destrucción trabajo del inconsciente. Descombrar. Cambios radicales. Desbastar.',  image: 'https://i.ibb.co/t4VNN5N/El-Arcano-Sin-Nombre.png' },
    { id: 14, name: 'Templanza', description:'Curación. Angel guardián. Moderación. Equilibrio. Reciprocidad. Circulación interna. Harmonía. Comunicación. Purificación del alma. Mensajero de la gracia. Elixir de la vida. Ayuda divina. Flujo del pasado en el presente y hacia el futuro. Medicina. Doble flujo de fuerzas vitales. Serenidad del espíritu. Equilibrio anímico. Poner el agua en el vino. Aporta el don y la receptividad.',  image: 'https://i.ibb.co/jwbGxX6/Templanza.png' },
    { id: 15, name: 'El Diablo', description:'Animalidad. Fuerzas sexuales. Gran creatividad. Atadura. Trabajo sobre la materia. Pasión. Inconsciente. Falso Gurú. Tentación. Fermentación. Dominación egocéntrica. Dinero. Bestialidad. Orgullo. fascinación. Orgía. Sadomasoquismo. Burla. Trampa. Lado oscuro. Perversiones. Depósito de vitalidad.',  image: 'https://i.ibb.co/CnNXLjm/El-Diablo.png' },
    { id: 16, name: 'La Casa de Dios', description:'Lo que estaba escondido sale al exterior. Alegría. Danzar alrededor del templo. Fuerza divina. Trueno. Falo. Ruina. Catástrofe. Ruptura de límites. Accidente. Divorcio. Explosión. Derrumbe. Liberación. Eyaculación. Golpe de genio. Ruptura. Dejar de circular la energía sexual. Iluminación.',  image: 'https://i.ibb.co/BzP9nzK/La-Casa-De-Dios.png' },
    { id: 17, name: 'La Estrella', description:'Don de si al mundo. Recepción medumínica. Ayuda providencial. Amor universal. Desperdicio de la energía en cosas del pasado. Nostalgia. Gracia. Musa. Influencia Astrológica. Acuario. Acción altruista. Mujer realizada. Santificar el lugar. Paz. Harmonía. Música. Perfume. Paraiso. ',  image: 'https://i.ibb.co/Sm4p7n3/Las-Estrellas.png' },
    { id: 18, name: 'La Luna', description:'Arquetipo maternal. Madre cósmica. La feminidad. Intuición profunda. Sueño. El inconciente. Ilusiones. Soledad. Noche. Tristeza. Estancamiento. Gestación. Hijos llamando al amor de la madre. Deseo de retornar al vientre materno. Locura. Superstición. Depresión. Secreto. Clandestinidad. Lo que se esconde.',  image: 'https://i.ibb.co/Yk26FMG/La-Luna.png' },
    { id: 19, name: 'El Sol', description:'Arquetipo paternal. Padre cósmico. Rayonamiento. Amor fraternal. Construcción de una obra común. Exito. Felicidad. Luz. Pareja iniciática. El uno ayuda al otro a atravesar. Riqueza de la cosecha. Gloria. Conciencia realizada. Padre que ama a sus hijos. Soliradidad.',  image: 'https://i.ibb.co/SKrbZsK/El-Sol.png' },
    { id: 20, name: 'El Juicio', description:'Deseo irresistible. Llamado de lo divino y de lo espiritual. Resurrección. Anuncio. Mensaje. Renovación. Nacimiento a una conciencia superior. Integrar los arquetipos paternos. Despertar. revelación. Fé. Fervor. Virtud. Bendición de los padres. La gracia. Ciclo iniciático completado. Consagración. Música.',  image: 'https://i.ibb.co/MgbHhQT/El-Juicio.png' },
    { id: 21, name: 'El Mundo', description:'Realización en el mundo. terminación. Las cuatro energías y la quinta escencia. Centro cósmico. Reputación. Alma universal. Viajero. Sexo femenino. realización de la unidad. Andrógino espiritual. Enclaustramiento. Obstáculo a superar. Nacimiento difícil. Mujer ideal. Matrimonio felíz. Vientre de la mujer encinta. Mundo perfecto. Venir al mundo. Danza creativa. Huevo cósmico. ',  image: 'https://i.ibb.co/N6RmZJN/El-Mundo.png' },
  ]);

  const [drawnCards, setDrawnCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]); // Estado para las cartas seleccionadas

  const drawCard = () => {
    if (deck.length === 0) return; // No hacer nada si ya no hay cartas en el mazo

    // Elegir una carta al azar del mazo
    const randomIndex = Math.floor(Math.random() * deck.length);
    const selectedCard = deck[randomIndex];

    // Eliminar la carta seleccionada del mazo para que no se repita
    const newDeck = deck.filter(card => card.id !== selectedCard.id);
    setDeck(newDeck);

    // Agregar la carta seleccionada a la lista de cartas sacadas
    setDrawnCards(prevDrawnCards => [...prevDrawnCards, selectedCard]);
  };

  const handleCardClick = (card) => {
    // Agregar la carta seleccionada al array de cartas seleccionadas
    setSelectedCards(prevSelectedCards => [...prevSelectedCards, card]);
  };

  return (
    <div className="container">
      {/* Contenedor para centrar la carta de reverso */}
      <div className="reverso-container" onClick={drawCard} style={{ cursor: 'pointer' }}>
        <img className='carta-reverso' src="https://i.ibb.co/ZMzK1Kx/Reverso.png" alt="Carta de reverso" loading="lazy" />
      </div>
  
      {/* Mostrar las cartas sacadas */}
      <div className='cartas-horizontal'>
        {drawnCards.map(card => (
          <div key={card.id} onClick={() => handleCardClick(card)} style={{ cursor: 'pointer' }}>
            <img className='carta-frente' src={card.image} alt={card.name} loading="lazy" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
  
      {/* Mostrar las descripciones de las cartas seleccionadas */}
      {selectedCards.length > 0 && (
        <div className='carta-descripcion'>
          {selectedCards.map((card, index) => (
            <div key={index}>
              <h2 >{card.name}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default TarotApp;