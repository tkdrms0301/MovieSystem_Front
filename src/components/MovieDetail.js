import { useState } from 'react';
import axios from 'axios';
import '../css/MovieDetail.css';

function MovieDetail(props) {
    //const movie_id
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

    const onSubmit = (event) => {
        axios
            .post('http://localhost:8080/commentPost', {
                //object_movie_id
                grade: grade,
                comment: comment,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
        event.preventDefault();
    };

    return (
        <div class="sect-base-movie">
            <div class="movie-box">
                <div class="box-image">
                    <img
                        class="img"
                        src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg"
                        alt="쥬라기 월드-도미니언 포스터 새창"
                        onerror="errorImage(this)"
                    />
                </div>
                <div class="box-contents">
                    <div class="title">
                        <span>쥬라기 월드-도미니언</span>
                        <span class="round">현재상영중</span>
                    </div>
                    <div class="score">
                        <span>예매율</span>
                        <span>39.2%</span>
                        <span>평점</span>
                        <span>5.0</span>
                    </div>
                    <div class="info">
                        <span>장르 : </span>
                        <span>액션</span>
                        <span>기본 : </span>
                        <span>12세 이상</span>
                        <span>,</span>
                        <span>147분</span>
                    </div>
                    <div class="open">
                        <span>개봉 : </span>
                        <span>2022.06.01</span>
                    </div>
                    <span class="like">
                        <a
                            class="link-reservation"
                            href="/ticket/?MOVIE_CD=20029663&amp;MOVIE_CD_GROUP=20029075"
                        >
                            예매
                        </a>
                    </span>
                </div>
            </div>
            <div class="real-rating">
                <div class="wrap_btn">
                    <a class="link-gradewrite" href="#">
                        <span>평점작성</span>
                    </a>
                </div>
            </div>
            <div class="write-comment">
                <form action="#" class="comment-form" onSubmit={onSubmit}>
                    <select
                        name="grade"
                        class="comment-select"
                        value={grade}
                        onChange={onChangeGrade}
                    >
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
                        value={comment}
                        onChange={onChangeComment}
                    ></input>
                    <input class="comment-submit" type="submit" value="댓글 작성" />
                </form>
            </div>
            <div class="comment">comment</div>
        </div>
    );
}
export default MovieDetail;
