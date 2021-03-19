// React Modules
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";




// API
import { api } from "../../services/api";





// TS
interface MoviesInfoProviderProps {
  children: ReactNode;
};

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
};

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
};

interface MoviesInfoContextData {
  genres: GenreResponseProps[];
  movies: MovieProps[];
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  selectedGenre: GenreResponseProps;
}


// Context
export const MoviesInfoContext = createContext<MoviesInfoContextData>({} as MoviesInfoContextData);

export function MoviesInfoProvider({ children }: MoviesInfoProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  return (
    <MoviesInfoContext.Provider
      value={{
        genres,
        movies,
        selectedGenreId,
        setSelectedGenreId,
        selectedGenre
      }}
    >
      {children}
    </MoviesInfoContext.Provider>
  );
}

export function useMoviesInfo() {
  const context = useContext(MoviesInfoContext);

  return context;
}
