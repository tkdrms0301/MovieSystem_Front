import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import Movie from './components/Movie';
import Home from './components/Home';
import Login from './components/Login';
import Sign from './components/Sign';
import MyPage from './components/MyPage';
import MovieDetail from './components/MovieDetail';
import MovieSchedule from './components/MovieSchedule';
import Ticketing from './components/Ticketing';
import TicketingSeat from './components/TicketingSeat';

function App() {
    return (
        <div className="root">
            <Router>
                <HomeLayout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/movies" element={<Movie />} />
                        <Route exact path="/theaters" element={<MovieSchedule />}></Route>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/sign" element={<Sign />} />
                        <Route exact path="/mypage" element={<MyPage />} />
                        <Route exact path="/moviedetail" element={<MovieDetail />} />
                        <Route exact path="/ticketing" element={<Ticketing />} />
                        <Route exact path="/ticketingSeat" element={<TicketingSeat />} />
                    </Routes>
                </HomeLayout>
            </Router>
        </div>
    );
}

export default App;
