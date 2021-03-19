// React Modules
import { useMoviesInfo } from "./hooks/useMovieInfo";

// CSS
import '../styles/Header.scss';


// APP
export function Header() {
  const { selectedGenre } = useMoviesInfo();
  const title = selectedGenre.title;

  return (
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>
  )
}
