import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage'
import Player from './pages/Player';
import TvShow from './pages/TvShow';
import Netflix from './pages/Netflix';
import SignUpPage from './pages/SignUpPage';
import MoviePage from './pages/MoviePage';
import Header from './components/Header';
import UserLiked from './pages/UserLiked';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path = '/login' element={<LoginPage/>}/>
        <Route exact path = '/signup' element={<SignUpPage/>}/>
        <Route exact path = '/player' element={<Player/>}/>
        <Route exact path = '/tv' element={<TvShow/>}/>
        <Route exact path = '/' element={<Netflix/>}/>
        <Route exact path = '/movie' element={<MoviePage/>}/>
        <Route exact path="/mylist" element={<UserLiked/>}/>
        
    </Routes>
   {/* <Header/> */}
    </BrowserRouter>
  );
}

export default App;
