import Api from "@/api/api";

interface PopularMoviesParams {
    language?: string;
    page?: number;
    region?: string;
}

export async function usePopularMovies(params: PopularMoviesParams = {}) {
    const api = await Api.getInstance();

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

    const response = await api.get<void, PaginatedMovies>({
        url: "/movie/popular",
        params: requestParams,
    });

    return response.data;
}