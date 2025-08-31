import Api from "@/api/api";

interface MovieDetailsParams {
    append_to_response?: string;
    language?: string;
}

export async function fetchMovieDetails(movieId: number, params: MovieDetailsParams = {}) {
    const api = await Api.getInstance();

    const {
        language = "en-US",
        ...rest
    } = params;

    const requestParams = {
        language,
        ...rest
    };

    const response = await api.get<void, MovieDetails>({
        url: `/movie/${movieId}`,
        params: requestParams,
    });

    return response.data;
}