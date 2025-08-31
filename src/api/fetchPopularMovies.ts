import { DiscoverMoviesParams, fetchDiscoverMovies } from "./fetchDiscoverMovies";

export async function fetchPopularMovies(params: DiscoverMoviesParams = {}) {

    const {
        language = "en-US",
        page = 1,
        ...rest
    } = params;

    const requestParams = {
        language,
        page,
        ...rest
    };

    return await fetchDiscoverMovies(requestParams);
}