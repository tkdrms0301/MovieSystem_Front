import React from 'react';
import '../css/Movie.css';
export default function (props) {
    return (
        <div className="body">
            <div className="movieChart">
                <h1>무비차트</h1>
            </div>
            <div className="movieList">
                <form className="sort">
                    <select name="sortMovie" id="sortMovie">
                        <option value="reservationRate">예매율 순</option>
                        <option value="orderRate">평점 순</option>
                    </select>
                    <input id="sortSubmit" type="submit" value="GO" />
                </form>
            </div>
        </div>
    );
}
