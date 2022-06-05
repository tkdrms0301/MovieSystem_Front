import React from 'react';
import { Link } from 'react-router-dom';

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
                                <a>무비차트</a>
                            </h3>
                        </div>
                        <Link to="/movies" className="allViewBtn">
                            전체보기
                        </Link>
                    </div>
                    <div className="movieChartList">
                        <div className="movieChartList_wrap">
                            <div className="movieChart_wrap">
                                <div className="movie_img">
                                    <img
                                        className="img"
                                        src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg"
                                        alt="쥬라기 월드-도미니언"
                                    />
                                </div>
                                <div className="movieInfo_wrap">
                                    <strong className="movieName">쥬라기 월드-도미니언</strong>
                                    <span>
                                        <img
                                            src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                                            alt="Golden Egg graet"
                                        />
                                        85%
                                    </span>
                                    <span>예매율 39.2%</span>
                                </div>
                            </div>

                            <div className="movieChart_wrap">
                                <div className="movie_img">
                                    <img
                                        className="img"
                                        src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85813/85813_320.jpg"
                                        alt="범죄도시 2"
                                    />
                                </div>
                                <div className="movieInfo_wrap">
                                    <strong className="movieName">범죄도시 2</strong>
                                    <span>
                                        <img
                                            src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                                            alt="Golden Egg graet"
                                        />
                                        99%
                                    </span>
                                    <span>예매율 32.8%</span>
                                </div>
                            </div>

                            <div className="movieChart_wrap">
                                <div className="movie_img">
                                    <img
                                        className="img"
                                        src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg"
                                        alt="쥬라기 월드-도미니언"
                                    />
                                </div>
                                <div className="movieInfo_wrap">
                                    <strong className="movieName">쥬라기 월드-도미니언</strong>
                                    <span>
                                        <img
                                            src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                                            alt="Golden Egg graet"
                                        />
                                        85%
                                    </span>
                                    <span>예매율 39.2%</span>
                                </div>
                            </div>

                            <div className="movieChart_wrap">
                                <div className="movie_img">
                                    <img
                                        className="img"
                                        src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg"
                                        alt="쥬라기 월드-도미니언"
                                    />
                                </div>
                                <div className="movieInfo_wrap">
                                    <strong className="movieName">쥬라기 월드-도미니언</strong>
                                    <span>
                                        <img
                                            src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                                            alt="Golden Egg graet"
                                        />
                                        85%
                                    </span>
                                    <span>예매율 39.2%</span>
                                </div>
                            </div>
                        </div>
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
                    <div className="event_list_wrap">
                        <div className="event_list">
                            <div className="event_swiper">
                                {event.map((e) => {
                                    return (
                                        <div className="event">
                                            <a href="#">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
