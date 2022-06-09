import { Fragment } from 'react';
import '../css/Ticketing.css';

function Ticketing() {
    return (
        <div class="ticket-container">
            <div class="ticket-layout">
                <div class="ticket-movie">
                    <div class="ticket-title">
                        <span>영화</span>
                    </div>
                    <div class="ticket-movieList">
                        <div class="ticket-movieInfo">
                            <div class="ticket-grade">
                                <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"></img>
                            </div>
                            <div class="ticket-movieName">
                                <span>브로커</span>
                            </div>
                        </div>

                        <div class="ticket-movieInfo">
                            <div class="ticket-grade">
                                <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-15.png"></img>
                            </div>
                            <div class="ticket-movieName">
                                <span>범죄도시2</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ticket-time">
                    <div class="ticket-title">
                        <span>시간</span>
                    </div>

                    <div class="ticket-timeTable">
                        <div class="ticket-schdule">
                            <div class="ticket-cinemaInfo">
                                <span class="dimension">2D</span>
                                <span>1관 4층</span>
                                <span>(총184석)</span>
                            </div>
                            <div class="ticket-timeInfo-box">
                                <div class="ticket-timeInfo">
                                    <div class="ticket-movieTime">
                                        <span>10:10</span>
                                    </div>

                                    <div class="ticket-seat">
                                        <span>166석</span>
                                    </div>
                                </div>

                                <div class="ticket-timeInfo">
                                    <div class="ticket-movieTime">
                                        <span>18:10</span>
                                    </div>

                                    <div class="ticket-seat">
                                        <span>166석</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ticket-schdule">
                            <div class="ticket-cinemaInfo">
                                <span class="dimension">2D</span>
                                <span>2관 4층</span>
                                <span>(총184석)</span>
                            </div>
                            <div class="ticket-timeInfo-box">
                                <div class="ticket-timeInfo">
                                    <div class="ticket-movieTime">
                                        <span>10:10</span>
                                    </div>

                                    <div class="ticket-seat">
                                        <span>166석</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ticket_tnb">
                <div class="ticket_tnb-box">
                    <div class="ticket_tnb-img">
                        <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img>
                    </div>
                    <div class="ticket_tnb-movieName">
                        <span>브로커</span>
                        <span>2D</span>
                        <span>15세 관람가</span>
                    </div>
                    <div class="ticket_tnb-movieInfo">
                        <span>극장</span>
                        <span class="ticket_tnb-movieInfo_detaile">CGV 구미</span>
                        <span>일시</span>
                        <span class="ticket_tnb-movieInfo_detaile">2022.6.11(토)</span>
                        <span>상영관</span>
                        <span class="ticket_tnb-movieInfo_detaile">2관 4층</span>
                        <span>인원</span>
                        <span class="ticket_tnb-movieInfo_detaile">3명</span>
                    </div>

                    <div className="ticket_tnb-seating">
                        <input type="submit" value="좌 석 선 택"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticketing;
