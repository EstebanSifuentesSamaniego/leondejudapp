import React from 'react'
import SongsList from './components/SongsList'
import Header from './components/Header'

function App() {

  const songs = [
    {id: 1, name: "Borró", artista: "Elevation Worship" },
    {id: 2, name: "Padre Nuestro", artista: "Bethel Church" },
    {id: 3, name: "Ver La Victoria", artista: "Elevation Worship" },
    {id: 4, name: "Dios Incomparable", artista: "Marco Barrientos" },
  ]

  return (
    /*
    <div>
      <Header />
      <SongsList songs={songs}/>
    </div>
    */
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
