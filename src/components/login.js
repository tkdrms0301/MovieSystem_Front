import '../css/Login.css';

function Login() {
    return (
        <div class="box-login">
            <form class="login-form" method="post" action="">
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
                        />
                    </p>
                    <p>
                        <input
                            placeholder="  PW"
                            type="password"
                            title="패스워드"
                            id="txtPassword"
                            name="txtPassword"
                            required="required"
                        />
                    </p>
                </div>
                <button type="submit" id="submit" title="로그인">
                    <span>로그인</span>
                </button>
            </form>
        </div>
    );
}

export default Login;
