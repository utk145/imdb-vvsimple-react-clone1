import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './page/Home/Home.jsx';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './page/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="movie/:id" element={<MovieDetails/>}></Route>  {/* <h1>Movie detail page</h1> */}
            <Route path="movies/:type" element={<MovieList/>}></Route>  {/* <h1>Movuies list page</h1> */}
            <Route path="/*" element={<h1>Error .....</h1>}></Route>
          </Routes>
          <footer>Attempted with passion by <a href='https://github.com/utk145' title="Github: utk145" target="_blank">Utkarsh</a> ❤️</footer>
        </Router>
    </div>
  );
}

export default App;