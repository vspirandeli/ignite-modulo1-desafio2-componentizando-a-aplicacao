// Context
import { useMoviesInfo } from "./hooks/useMovieInfo";

// Components
import { Button } from './Button';

// CSS
import '../styles/sidebar.scss';


// APP
export function SideBar() {
  const { genres, selectedGenreId, setSelectedGenreId } = useMoviesInfo();

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
