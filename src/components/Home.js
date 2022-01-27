import React from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid.js";
import { Spinner } from "./Spinner/Spinner.styles";
import Thumb from "./Thumb/Thumb";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Images
import NoImage from "../images/no_image.jpg";
import { SearchBar } from "./SearchBar/SearchBar";
import Button from "./Button/Button";

const Home = () => {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore,
    } = useHomeFetch();

    console.log(state);

    if (error) {
        return <div>Something went Wrong</div>;
    }

    return (
        <>
            {!searchTerm && state.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={!searchTerm ? "Popular Movies" : "Search Result"}>
                {state.results.map((movie) => (
                    <Thumb
                        key={movie.id}
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL +
                                  POSTER_SIZE +
                                  movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        clickable={true}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button
                    text="Load More"
                    callback={() => {
                        setIsLoadingMore(true);
                    }}
                />
            )}
        </>
    );
};

export default Home;
