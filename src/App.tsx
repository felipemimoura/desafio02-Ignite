import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';


import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  function handleSelectGenre(genre: GenreResponseProps) {
    setSelectedGenreId(genre.id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar handleSelectGenre={handleSelectGenre}/> 

      <div className="container">
        <Content idGenre={selectedGenreId}/>

{/* 
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main> */}
      </div>
    </div>
  )
}