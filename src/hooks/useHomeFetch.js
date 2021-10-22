import { useEffect, useState, useRef } from "react";

//API
import apiSettings from "../API";
//Helpers
import { isPersistedState } from "../helpers";

const initalState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [state, setstate] = useState(initalState);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await apiSettings.fetchMovies(searchTerm, page);

            setstate((prev) => ({
                ...movies,
                results:
                    page > 1
                        ? [...prev.results, ...movies.results]
                        : movies.results,
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState("homeState");

            if (sessionState) {
                setstate(sessionState);
                console.log("Grabbing From Session Storage");
                return;
            }
        }
        
        setstate(initalState);
        console.log("Grabbing From API");
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // Load More
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, state.page, searchTerm]);

    // Write to SessionStrorage
    useEffect(() => {
        if (!searchTerm) {
            sessionStorage.setItem("homeState", JSON.stringify(state));
        }
    }, [searchTerm, state]);

    return {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore,
    };
};
