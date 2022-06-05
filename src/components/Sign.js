import '../css/Sign.css';

function Sign() {
    return (
        <div class="box-sign">
            <form class="sign-form">
                <p class="info">회원정보를 입력하신 후, 가입 버튼을 클릭해 주세요.</p>
                <div class="sign">
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
                            placeholder="  이름"
                            type="text"
                            title="이름"
                            id="txtUserName"
                            name="txtUserName"
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
                    <p>
                        <input
                            placeholder="  PW재확인"
                            type="password"
                            title="패스워드"
                            id="txtRePassword"
                            name="txtRePassword"
                            required="required"
                        />
                    </p>
                </div>
                <button type="submit" id="submit" title="회원가입">
                    <span>회원가입</span>
                </button>
            </form>
        </div>
    );
}

export default Sign;
