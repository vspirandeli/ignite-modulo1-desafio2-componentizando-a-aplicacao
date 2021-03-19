// Components
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

// CSS
import './styles/global.scss';
import './styles/app.scss';

// Context
import { MoviesInfoProvider } from './components/hooks/useMovieInfo';


// APP
export function App() {

  return (
    <MoviesInfoProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />

        <div className="container">
          <Content />
        </div>
      </div>
    </MoviesInfoProvider>
  );
}
