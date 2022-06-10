import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import axios from 'axios';

export default function Home() {
    const [movielocation, setMovieLocation] = useState(0);
    const [eventLocation, setEventLocation] = useState(0);
    const [movie, setMovie] = useState(null);
    const [event, setEvent] = useState(null);
    const [posts, setPosts] = useState(false);

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
        const getMovies = async () => {
            try {
                setPosts(false);
                const movies = await axios.get('http://localhost:8080/movieGet');
                console.log('1234123431241234');

                const events = await axios.get('http://localhost:8080/eventGet');
                console.log('46546546546556');
                console.log(movies.data);
                console.log(events.data);
                setMovie(movies.data);
                setEvent(events.data);
                setPosts(true);
            } catch (err) {
                console.log('Err : ', err);
            }
        };
        getMovies();
    }, []);

    useEffect(() => {
        // 처음 실행될 때 무조건 한 번 실행 -> 이후 changeEventWrap이 호출되면 다시 실행
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
                            {posts
                                ? movie.map((m, index) => {
                                      return (
                                          <div className="movieChart_wrap" key={index}>
                                              <div className="movie_img">
                                                  <img className="img" src={m.url} alt={m.title} />
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
                                                  <strong className="movieName">{m.title}</strong>
                                                  <span>
                                                      <img
                                                          src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                                                          alt="Golden Egg graet"
                                                      />
                                                      {m.star}
                                                  </span>
                                                  <span>{m.rate}</span>
                                              </div>
                                          </div>
                                      );
                                  })
                                : null}
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
                                {posts
                                    ? event.map((e, index) => {
                                          return (
                                              <div className="event" key={index}>
                                                  <a href="#none">
                                                      <div className="img_wrap">
                                                          <img src={e.url} alt={e.title} />
                                                      </div>
                                                      <strong>{e.title}</strong>
                                                      <span>{e.term}</span>
                                                  </a>
                                              </div>
                                          );
                                      })
                                    : null}
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
