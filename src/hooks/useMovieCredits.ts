import Api from "@/api/api";

interface MovieCreditsParams {
    language?: string;
}

export async function useMovieCredits(movieId: number, params: MovieCreditsParams = {}) {
    const api = await Api.getInstance();

    const {
        language = "en-US"
    } = params;

    const requestParams = {
        language,
    };

    const response = await api.get<void, MovieCredits>({
        url: `/movie/${movieId}/credits`,
        params: requestParams,
    });

    return response.data;
}