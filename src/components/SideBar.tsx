

import { useState } from 'react'
import { useEffect } from 'react'
import {api} from  '../services/api'
import { Button } from './Button'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary'| 'drama' | 'horror' | 'family';
  title: string
}
interface SideBarProps {
  handleSelectGenre(genre: GenreResponseProps): void
}

export function SideBar({ handleSelectGenre }: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([])
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const handleSelect = (genre: GenreResponseProps) => {
    setSelectedGenreId(genre.id)
    handleSelectGenre(genre)
  }

  useEffect(()=> {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  },[genres])

  return(
    <nav className="sidebar">
      <span>Watch <p>Me</p></span>

      <div className="buttons-container">
        {genres.map((genre) => {
          return(
            <Button  
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleSelect(genre)}
              selected={selectedGenreId === genre.id}
            />
          )
        })}
      </div>
    </nav>
  )

}