import Api from "@/api/api";

interface SimilarMoviesParams {
    language?: string;
    page?: number;
}

export async function useSimilarMovies(movieId: number, params: SimilarMoviesParams = {}) {
    const api = await Api.getInstance();

    const {
        language = "en-US",
        page = 1
    } = params;

    const requestParams = {
        language,
        page,
    };

    const response = await api.get<void, PaginatedMovies>({
        url: `/movie/${movieId}/similar`,
        params: requestParams,
    });

    return response.data;
}