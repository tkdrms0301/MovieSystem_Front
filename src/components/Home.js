import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import movieData from './movie.json';
import '../css/Home.css';
const event = [
    {
        title: 'All-Day 영스엑런칭 이벤트',
        url: 'https://img.cgv.co.kr/WebApp/contents/eventV4/34664/16542456347860.jpg',
        term: '2022.06.03~2022.07.22',
    },
    {
        title: '[브로커]CGV 필름마크',
        url: 'https://img.cgv.co.kr/WebApp/contents/eventV4/34641/16541443521240.jpg',
        term: '2022.06.02~2022.06.26',
    },
    {
        title: '[쥬라기 월드: 도미니언]CGV 필름마크',
        url: 'https://img.cgv.co.kr/WebApp/contents/eventV4/34608/16534549224840.jpg',
        term: '2022.05.25~2022.06.19',
    },
    {
        title: '[CGV NFT 플레이 포스터] No.2 범죄도시2',
        url: 'https://img.cgv.co.kr/WebApp/contents/eventV4/34501/16521431715560.jpg',
        term: '2022.05.10~2022.06.12',
    },
];

export default function Home() {
    const [movielocation, setMovieLocation] = useState(0);
    const [eventLocation, setEventLocation] = useState(0);

    const [visiable, setVisible] = useState(true);
    const [eventVisiable, setEventVisible] = useState(true);

    const changeMovieWrap = () => {
        if (visiable) setMovieLocation(movielocation - 1024);
        else setMovieLocation(movielocation + 1024);
        setVisible(!visiable);
    };

    const changeEventWrap = () => {
        if (eventVisiable) setEventLocation(eventLocation - 334);
        else setEventLocation(eventLocation + 334);
        setEventVisible(!eventVisiable);
    };

    useEffect(() => {
        // 처음 실행될 때 무조건 한 번 실행 -> 이후 changeEventWrap이 호출되면 다시 실행?
        let timer = setInterval(() => {
            changeEventWrap();
        }, 3000);

        return () => clearInterval(timer);
    }, [changeEventWrap]);

    return (
        <div id="container">
            <div className="baner">
                <div className="contents">
                    <div className="video_wrap">
                        <video autoPlay muted>
                            <source
                                src="https://adimg.cgv.co.kr/images/202205/Witch2/220527_Witch2_1080x608.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>
            <div className="movieChartScreen">
                <div className="contents">
                    <div className="movieChart_btn">
                        <div className="tabBtn">
                            <h3>
                                <a href="#none">무비차트</a>
                            </h3>
                        </div>
                        <Link to="/movies" className="allViewBtn">
                            전체보기
                        </Link>
                    </div>
                    <div className="movieChartList">
                        <div
                            className="movieChartList_wrap"
                            style={{
                                transform: `translate3d(${movielocation}px, 0px, 0px)`,
                            }}
                        >
                            {movieData.map((movie) => {
                                return (
                                    <div className="movieChart_wrap">
                                        <div className="movie_img">
                                            <img
                                                className="img"
                                                src={movie.url}
                                                alt={movie.title}
                                            />
                                            <div class="movieBtn_wrap">
                                                <a href="#none" className="movieDetailBtn">
                                                    상세보기
                                                </a>
                                                <a href="#none" className="movieTicketingBtn">
                                                    예매하기
                                                </a>
                                            </div>
                                        </div>
                                        <div className="movieInfo_wrap">
                                            <strong className="movieName">{movie.title}</strong>
                                            <span>
                                                <img
                                                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                                                    alt="Golden Egg graet"
                                                />
                                                {movie.star}
                                            </span>
                                            <span>{movie.rate}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {visiable ? (
                            <div className="nextBtn" onClick={() => changeMovieWrap()} />
                        ) : (
                            <div className="prevBtn" onClick={() => changeMovieWrap()} />
                        )}
                    </div>
                </div>
            </div>
            <div className="event_wrap">
                <div className="contents">
                    <div className="event_title">
                        <h3>Evnet</h3>
                        <a
                            href="http://www.cgv.co.kr/culture-event/event/defaultNew.aspx#1  "
                            className="allViewBtn"
                        >
                            전체보기
                        </a>
                    </div>
                    <div className="event_list">
                        <div className="event_list_box">
                            <div
                                className="event_list_wrap"
                                style={{
                                    transform: `translate3d(${eventLocation}px, 0px, 0px)`,
                                }}
                            >
                                {event.map((e) => {
                                    return (
                                        <div className="event">
                                            <a href="#none">
                                                {/* 링크 걸어줘야 함 */}
                                                <div className="img_wrap">
                                                    <img src={e.url} alt={e.title} />
                                                </div>
                                                <strong>{e.title}</strong>
                                                <span>{e.term}</span>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                            {eventVisiable ? (
                                <div className="nextBtn" onClick={() => changeEventWrap()} />
                            ) : (
                                <div className="prevBtn" onClick={() => changeEventWrap()} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
