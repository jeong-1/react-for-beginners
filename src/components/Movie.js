import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    // Link: 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
    return (
    <div>
        <img src={coverImg} alt={title} />
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie; 
