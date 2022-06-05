import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import Movie from './components/Movie';
import Home from './components/Home';

function App() {
    return (
        <div className="root">
            <Router>
                <HomeLayout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/movies" element={<Movie />} />
                        <Route exact path="/theaters"></Route>
                    </Routes>
                </HomeLayout>
            </Router>
        </div>
    );
}

export default App;
