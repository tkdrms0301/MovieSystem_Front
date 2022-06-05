import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomeLayout(props) {
    const { children } = props;
    return (
        <div>
            <div className="header">
                <div className="header_content">
                    <div className="contents">
                        <span className="More" onClick="openNav()">
                            &#9776;
                        </span>
                        <div className="cgvImeage">
                            <h1 onclick="">
                                <Link to="/">
                                    <img
                                        src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png"
                                        alt="CGV"
                                    />
                                </Link>
                                <span>CULTUREPLEX</span>
                            </h1>
                        </div>
                        <ul className="memberInfo_wrap">
                            <div className="ad-partner">
                                <a href="#">
                                    <img
                                        src="https://img.cgv.co.kr/WingBanner/2022/0303/16462658373950.png"
                                        alt="현대M포인트"
                                    />
                                </a>
                            </div>

                            <div id="mySidenav" className="sidenav">
                                <a
                                    href="javascript:void(0)"
                                    className="closebtn"
                                    onClick="closeNav()"
                                >
                                    &times;
                                </a>
                                <li>
                                    <a href="/Login.html">
                                        <img
                                            src="https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png"
                                            alt="로그인"
                                        />
                                        <span>로그인</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png"
                                            alt="회원가입"
                                        />
                                        <span>회원가입</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/MyPage.html">
                                        <img
                                            src="https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png"
                                            alt="MY CGV"
                                        />
                                        <span>MY CGV</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png"
                                            alt="고객센터"
                                        />
                                        <span>고객센터</span>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="nav">
                    <div className="contents">
                        <ul className="nav_menu">
                            <li>
                                <Link to="/movies">
                                    <h3>영화</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/theaters">
                                    <h3>극장</h3>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default HomeLayout;
