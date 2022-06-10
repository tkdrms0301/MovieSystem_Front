function Comment({ commentContent }) {
    const strDate = String(commentContent.date);
    const date = strDate.split('T');
    return (
        <div>
            <div>{commentContent.member.id}</div>
            <div>{commentContent?.contents}</div>
            <div>{commentContent?.grade}</div>
            <div>{date[0].replaceAll('-', '.')}</div>
        </div>
    );
}
export default Comment;
