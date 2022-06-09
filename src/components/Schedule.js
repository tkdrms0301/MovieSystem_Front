function Schedule({ movieSchedule }) {
    return (
        <li>
            <a
                href="/ticket/?MOVIE_CD=20029075&amp;MOVIE_CD_GROUP=20029075&amp;PLAY_YMD=20220605&amp;THEATER_CD=0056&amp;PLAY_START_TM=2000&amp;AREA_CD=13&amp;SCREEN_CD=003"
                target="_top"
            >
                <em>{movieSchedule.time}</em>
                <span class="txt-lightblue">98석</span>
            </a>
        </li>
    );
}

export default Schedule;
