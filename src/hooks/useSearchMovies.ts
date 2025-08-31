import Api from "@/api/api";

interface SearchMoviesParams {
    query: string;
    page?: number;
    region?: string;
    language?: string;
    include_adult?: boolean;
    primary_release_yea?: number;
    year?: number;
}

export async function useSearchMovies(params: SearchMoviesParams) {
    const {
        query,
        page = 1, // Default value from the API documentation
        language = "en-US", // Default from the API, not 'es-ES' as in your original code
        include_adult = false, // Default from the API
        ...optionalParams // Collects all other optional parameters
    } = params;

    const requestParams = {
        query,
        page,
        language,
        include_adult,
        ...optionalParams,
    };

    const api = await Api.getInstance();
    const response = await api.get<void, PaginatedMovies>({
        url: "/movie/search",
        params: requestParams,
    });

    return response.data;
}