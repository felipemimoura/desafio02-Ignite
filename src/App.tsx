import { useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import './styles/content.scss';
import './styles/global.scss';
import './styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  function handleSelectGenre(genre: GenreResponseProps) {
    console.log(genre)
    setSelectedGenreId(genre.id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar handleSelectGenre={handleSelectGenre}/> 

      <div className="container">
        <Content idGenre={selectedGenreId}/>

      </div>
    </div>
  )
}