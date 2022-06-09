import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/MovieDetail.css';
import { useLocation } from 'react-router-dom';

function MovieDetail(props) {
    //const movie_id
    const search = useLocation().search;
    const movie = new URLSearchParams(search).get('movie');
    const [check, setCheck] = useState(false);

    const [movieData, setMovieData] = useState('');

    function startMovie() {
        axios
            .get('http://localhost:8080/movieDetail/' + movie)
            .then((res) => {
                setMovieData(res.data);
                setCheck(true);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        console.log(typeof movie);
        startMovie();
    }, []);

    const [grade, setGrade] = useState('');
    const [comment, setComment] = useState('');

    const onChangeGrade = (event) => {
        setGrade(event.target.value);
        console.log(event.target.value);
    };

    const onChangeComment = (event) => {
        setComment(event.target.value);
        console.log(event.target.value);
    };

    // const onSubmit = (event) => {
    //     axios
    //         .post('http://localhost:8080/commentPost', {
    //             //object_movie_id
    //             grade: grade,
    //             comment: comment,
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => console.log(err));
    //     event.preventDefault();
    // };

    return (
        <div class="sect-base-movie">
            {check ? (
                <div class="movie-box">
                    <div class="box-image">
                        <img
                            class="img"
                            src={movieData.movies.url}
                            alt=""
                            onerror="errorImage(this)"
                        />
                    </div>
                    <div class="box-contents">
                        <div class="title">
                            <span>{movieData.movies.title}</span>
                            <span class="round">현재상영중</span>
                        </div>
                        <div class="score">
                            <span>예매율</span>
                            <span>{movieData.movies.ticketingRate}%</span>
                            <span>평점</span>
                            <span>{movieData.movies.averageGrade}</span>
                        </div>
                        <div class="info">
                            <span>장르 : </span>
                            <span>{movieData.movies.genre}</span>
                            <span>기본 : </span>
                            <span>{movieData.movies.screenGrade}세 이상</span>
                            <span>,</span>
                            <span>{movieData.movies.runtime}</span>
                        </div>
                        <div class="open">
                            <span>개봉 : </span>
                            <span>{movieData.movies.openingDate}</span>
                        </div>
                        <span class="like">
                            <a class="link-reservation" href="#">
                                예매
                            </a>
                        </span>
                    </div>
                </div>
            ) : null}

            <div class="real-rating">
                <div class="wrap_btn">
                    <a class="link-gradewrite" href="#">
                        <span>평점작성</span>
                    </a>
                </div>
            </div>
            <div class="write-comment">
                <form action="#" class="comment-form">
                    <select name="grade" class="comment-select" value="" onChange="">
                        <option value="">평점 선택</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    <input
                        class="comment-input"
                        type="text"
                        placeholder="댓글을 작성해주세요."
                        value=""
                        onChange=""
                    ></input>
                    <input class="comment-submit" type="submit" value="댓글 작성" />
                </form>
            </div>
            <div class="comment">comment</div>
        </div>
    );
}
export default MovieDetail;
