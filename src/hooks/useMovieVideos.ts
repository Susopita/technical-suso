import Api from "@/api/api";

interface MovieVideosParams {
    language?: string;
}

export async function useMovieVideos(movieId: number, params: MovieVideosParams = {}) {
    const api = await Api.getInstance();

    const {
        language = "en-US"
    } = params;

    const requestParams = {
        language,
    };

    const response = await api.get<void, MovieVideos>({
        url: `/movie/${movieId}/videos`,
        params: requestParams,
    });

    return response.data;
}