import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(""); 
    const {id} = useParams();  // React Router는 useParams() 함수를 사용하여 변수의 값을 넘겨줌
    const getMovie = async () => {  // await는 async 함수 내부에 있지 않으면 사용할 수 없음
        // id에 해당하는 영화 정보를 불러옴 
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json(); 
        console.log(json);
        console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []); 

    return (
        <div>
        <h1>Detail</h1>
        {loading ? <h1>Loading...</h1> : (
        <div>
            <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.description_full}
                genres={movie.genres}
            />
        </div>
        )}
        </div>
    );
}
export default Detail;