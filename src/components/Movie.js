import React from "react";
import { useParams } from "react-router-dom";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";

// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
// Images
import NOIMAGE from "../images/no_image.jpg";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);
    console.log(movie);
    if (loading) return <Spinner />;
    if (error) return <div>Oops! Something went Wrong.</div>;

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map((actor) => (
                    <Actor
                        imageUrl={
                            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NOIMAGE
                        }
                        name={actor.name}
                        character={actor.character}
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;
