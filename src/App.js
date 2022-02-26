import React from 'react'
import SongsList from './components/SongsList'
import Header from './components/Header'
import { Link } from 'react-router-dom'

function App() {

  const songs = [
    {id: 0, name: "Borró", artista: "Elevation Worship" },
    {id: 1, name: "Padre Nuestro", artista: "Bethel Church" },
    {id: 2, name: "Ver La Victoria", artista: "Elevation Worship" },
    {id: 3, name: "Dios Incomparable", artista: "Marco Barrientos" },
  ]

  return (
    <div>
      <Header />
      <SongsList songs={songs}/>
    </div>
  );
}

export default App;
