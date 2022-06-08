import '../css/Login.css';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Route, Navigate } from 'react-router-dom';
function Login() {
    const [posts, setPosts] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value);
        console.log(id);
    };

    const onChangePw = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };

    const onSubmit = (e) => {
        // submit 이벤트는 브라우저에서 새로고침을 발생
        // 이를 방지하기 위해 이 함수를 호출
        axios
            .post('http://localhost:8080/login/member', {
                id: id,
                password: password,
            })
            .then((res) => {
                console.log(res);
                setCheck(true);
            })
            .catch((err) => console.log(err));
        e.preventDefault();
    };

    return (
        <div class="box-login">
            <form class="login-form" method="post" onSubmit={onSubmit}>
                <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                <div class="login">
                    <p>
                        <input
                            placeholder="  ID"
                            type="text"
                            title="아이디"
                            id="txtUserId"
                            name="txtUserId"
                            required="required"
                            value={id}
                            onChange={onChangeId}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="PW"
                            type="password"
                            title="패스워드"
                            id="txtPassword"
                            name="txtPassword"
                            required="required"
                            value={password}
                            onChange={onChangePw}
                        />
                    </p>
                </div>
                <button type="submit" id="submit" title="로그인">
                    <span>로그인</span>
                </button>
            </form>
            {check && <Navigate to="/" />}
        </div>
    );
}

export default Login;
