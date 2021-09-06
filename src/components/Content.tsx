import { useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";
import { MovieCard } from "./MovieCard";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  idGenre: number
}

export function Content({idGenre}: ContentProps)  {
 const [genreId, setGenreId] = useState(idGenre)
 const [selectGenre, setSelectGenre] = useState({} as GenreResponseProps)
 const [movies, setMovies] = useState<MovieProps[]>([])

 useEffect(() => {
   setGenreId(idGenre)
 })



 useEffect(() => {
   console.log(genreId)
  api.get<MovieProps[]>(`movies/?Genre_id=${genreId}`).then(response => {
    setMovies(response.data);
    
  });

  api.get<GenreResponseProps>(`genres/${genreId}`).then(response => {
    setSelectGenre(response.data);
  })

  
 }, [genreId])

 return(
   <>
    <header>
      <span className="category">Categoria:<span> {selectGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies && movies.map((movie) => {
          return(
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} 
            runtime={movie.Runtime} rating={movie.Ratings[0].Value}/>

          )
        })}
      </div>
    </main>
   </>
 )
}