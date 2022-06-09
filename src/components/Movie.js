import axios from 'axios';
import React, { useState } from 'react';
import '../css/Movie.css';
function Movie(props) {
    const [sort, setSort] = useState('');

    const onChangeSort = (event) => {
        setSort(event.target.value);
        console.log(event.target.value);
    };

    const onSubmit = (event) => {
        if (sort === 'reservationRate') {
            axios
                .get('http://localhost:8080/movieTicketingRateGet', {
                    sort: sort,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        } else if (sort === 'orderRate') {
            axios
                .get('http://localhost:8080/movieAverageGradeGet', {
                    sort: sort,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        } else {
        }
        event.preventDefault();
    };

    return (
        <div className="body">
            <div className="movieChart">
                <h1>무비차트</h1>
            </div>
            <div className="movieList">
                <form className="sort" method="get" onSubmit={onSubmit}>
                    <select name="sortMovie" id="sortMovie" value={sort} onChange={onChangeSort}>
                        <option value="">정렬 순서</option>
                        <option value="reservationRate">예매율 순</option>
                        <option value="orderRate">평점 순</option>
                    </select>
                    <input id="sortSubmit" type="submit" value="GO" />
                </form>
            </div>
        </div>
    );
}

export default Movie;
