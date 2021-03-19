// Context
import { useMoviesInfo } from './hooks/useMovieInfo';

// Components
import { Header } from './Header';
import { MovieCard } from './MovieCard';

// CSS
import '../styles/content.scss'

// APP
export function Content() {
  const { movies } = useMoviesInfo();

  return (
    <>
      <Header />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={(movie.Title).toLocaleLowerCase()}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </>
  )

}
