function Comment({ commentContent }) {
    const strDate = String(commentContent.date);
    const date = strDate.split('T');
    return (
        <>
            <li class="" data-spoilercnt="0" data-reportcnt="0">
                <a href="javascript:return false;" class="comment_screen_spoiler">
                    &nbsp;
                </a>
                <div class="comment_box-image">
                    <span class="comment_thumb-image">
                        <img
                            src="http://img.cgv.co.kr/R2014/images/common/default_profile.gif"
                            alt="사용자 프로필"
                            onerror="errorImage(this, {'type':'profile'})"
                        />
                        <span class="comment_profile-mask"></span>
                        <div class="comment_theater-sticker"></div>
                    </span>
                </div>
                <div class="comment_box-contents">
                    <ul class="comment_writerinfo">
                        <li class="comment_writer-name">
                            <a href="#select_main" class="comment_commentMore">
                                {' '}
                                <span class="comment_egg-icon comment_good"></span>
                                {commentContent.member.id}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="comment_box-comment">
                    <p>{commentContent?.contents}</p>
                </div>
                <div class="comment_writer-etc">
                    <span class="comment_day">{date[0].replaceAll('-', '.')}</span>
                    <span class="comment_like point_like">
                        <a href="javascript:return false;" class="comment_btn_point_like">
                            <span>
                                <img
                                    src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png"
                                    alt="like"
                                    class="comment_like_red"
                                />
                            </span>
                            <span class="comment_recommand_count">{commentContent?.recommand}</span>
                        </a>
                    </span>
                    <span class="comment_grade">평점 : {commentContent?.grade}</span>
                </div>
            </li>
        </>
    );
}
export default Comment;
