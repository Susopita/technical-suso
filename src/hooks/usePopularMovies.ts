import { DiscoverMoviesParams, useDiscoverMovies } from "./useDiscoverMovies";

export async function usePopularMovies(params: DiscoverMoviesParams = {}) {

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

    return await useDiscoverMovies(requestParams);
}