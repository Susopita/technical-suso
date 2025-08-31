import Api from "@/api/api";

interface GenresParams {
    language?: string;
}

export async function fetchMovieGenres(params: GenresParams = {}) {
    const api = await Api.getInstance();

    // Destructuring with default value
    const {
        language = "en"
    } = params;

    const requestParams = {
        language,
    };

    const response = await api.get<void, MoviesGenres>({
        url: "/genre/movie/list",
        params: requestParams,
    });

    return response.data;
}