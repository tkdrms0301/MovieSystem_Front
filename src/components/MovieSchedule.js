import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/MovieSchedule.css';
export default function MovieSchedule(props) {
    const [movieSchedules, setMovieSchedules] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8080/theaterTime')
            .then((res) => {
                setMovieSchedules(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div class="sect-showtimes">
            {movieSchedules ? (
                <ul>
                    <li>
                        <div class="col-times">
                            <div class="info-movie">
                                <span class="ico-grade grade-12">12세 이상</span>{' '}
                                <a href="/movies/detail-view/?midx=85689" target="_parent">
                                    <strong>{movieSchedules[0].movie.title}</strong>
                                </a>
                                <span class="round lightblue">
                                    <em>상영중</em>
                                </span>
                                <i>{movieSchedules[0].movie.genre}</i>{' '}
                                <i>{movieSchedules[0].movie.runtime}</i>{' '}
                                <i>{movieSchedules[0].movie.openingDate} 개봉</i>
                            </div>

                            <div class="type-hall">
                                <div class="info-hall">
                                    <ul>
                                        <li>2D</li>
                                        <li>3관 8층</li>
                                        <li>총 172석</li>
                                    </ul>
                                </div>
                                <div class="info-timetable">
                                    <ul>
                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029075&amp;MOVIE_CD_GROUP=20029075&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2000&amp;AREA_CD=13&amp;SCREEN_CD=003"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="003"
                                                data-playnum="5"
                                                data-playstarttime="2000"
                                                data-playendtime="2237"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="98"
                                                data-screenkorname="3관 8층"
                                            >
                                                <em>20:00</em>
                                                <span class="txt-lightblue">98석</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029075&amp;MOVIE_CD_GROUP=20029075&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2300&amp;AREA_CD=13&amp;SCREEN_CD=003"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="003"
                                                data-playnum="6"
                                                data-playstarttime="2300"
                                                data-playendtime="2537"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="149"
                                                data-screenkorname="3관 8층"
                                            >
                                                <em>23:00</em>
                                                <span class="txt-lightblue">149석</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="type-hall">
                                <div class="info-hall">
                                    <ul>
                                        <li>2D</li>
                                        <li>4관 8층[LCK관]</li>
                                        <li>총 124석</li>
                                    </ul>
                                </div>
                                <div class="info-timetable">
                                    <ul>
                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029075&amp;MOVIE_CD_GROUP=20029075&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2030&amp;AREA_CD=13&amp;SCREEN_CD=004"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="004"
                                                data-playnum="5"
                                                data-playstarttime="2030"
                                                data-playendtime="2307"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="87"
                                                data-screenkorname="4관 8층[LCK관]"
                                            >
                                                <em>20:30</em>
                                                <span class="txt-lightblue">87석</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029075&amp;MOVIE_CD_GROUP=20029075&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2330&amp;AREA_CD=13&amp;SCREEN_CD=004"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="004"
                                                data-playnum="6"
                                                data-playstarttime="2330"
                                                data-playendtime="2607"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="114"
                                                data-screenkorname="4관 8층[LCK관]"
                                            >
                                                <em>23:30</em>
                                                <span class="txt-lightblue">114석</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="col-times">
                            <div class="info-movie">
                                <span class="ico-grade grade-15">15세 이상</span>{' '}
                                <a href="/movies/detail-view/?midx=85813" target="_parent">
                                    <strong>범죄도시 2</strong>
                                </a>
                                <span class="round lightblue">
                                    <em>상영중</em>
                                </span>
                                <span class="">
                                    <em></em>
                                </span>
                                <i>범죄,&nbsp;액션</i>/ <i>106분</i>/ <i>2022.05.18 개봉</i>
                            </div>

                            <div class="type-hall">
                                <div class="info-hall">
                                    <ul>
                                        <li>2D</li>
                                        <li>1관 6층</li>
                                        <li>총 158석</li>
                                    </ul>
                                </div>
                                <div class="info-timetable">
                                    <ul>
                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029355&amp;MOVIE_CD_GROUP=20029355&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2015&amp;AREA_CD=13&amp;SCREEN_CD=001"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="001"
                                                data-playnum="6"
                                                data-playstarttime="2015"
                                                data-playendtime="2211"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="21"
                                                data-screenkorname="1관 6층"
                                            >
                                                <em>20:15</em>
                                                <span class="txt-lightblue">21석</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029355&amp;MOVIE_CD_GROUP=20029355&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2230&amp;AREA_CD=13&amp;SCREEN_CD=001"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="001"
                                                data-playnum="7"
                                                data-playstarttime="2230"
                                                data-playendtime="2426"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="114"
                                                data-screenkorname="1관 6층"
                                            >
                                                <em>22:30</em>
                                                <span class="txt-lightblue">114석</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029355&amp;MOVIE_CD_GROUP=20029355&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2445&amp;AREA_CD=13&amp;SCREEN_CD=001"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="001"
                                                data-playnum="8"
                                                data-playstarttime="2445"
                                                data-playendtime="2641"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="145"
                                                data-screenkorname="1관 6층"
                                            >
                                                <em>24:45</em>
                                                <span class="txt-lightblue">145석</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="type-hall">
                                <div class="info-hall">
                                    <ul>
                                        <li>2D</li>
                                        <li>2관(Laser) 6층</li>
                                        <li>총 124석</li>
                                    </ul>
                                </div>
                                <div class="info-timetable">
                                    <ul>
                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029355&amp;MOVIE_CD_GROUP=20029355&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2120&amp;AREA_CD=13&amp;SCREEN_CD=002"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="002"
                                                data-playnum="6"
                                                data-playstarttime="2120"
                                                data-playendtime="2316"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="44"
                                                data-screenkorname="2관(Laser) 6층"
                                            >
                                                <em>21:20</em>
                                                <span class="txt-lightblue">44석</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="/ticket/?MOVIE_CD=20029355&amp;MOVIE_CD_GROUP=20029355&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2340&amp;AREA_CD=13&amp;SCREEN_CD=002"
                                                target="_top"
                                                data-theatercode="0056"
                                                data-playymd="20220605"
                                                data-screencode="002"
                                                data-playnum="7"
                                                data-playstarttime="2340"
                                                data-playendtime="2536"
                                                data-theatername="CGV 강남"
                                                data-seatremaincnt="101"
                                                data-screenkorname="2관(Laser) 6층"
                                            >
                                                <em>23:40</em>
                                                <span class="txt-lightblue">101석</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            ) : null}

            <p>ㆍ입장 지연에 따른 관람 불편을 최소화하기 위해 영화는 10분 후 상영이 시작됩니다.</p>
        </div>
    );
}
