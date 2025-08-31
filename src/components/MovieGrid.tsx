'use client';

import { MovieCard } from './MovieCard'

interface MovieGridProps {
    movies: Movie[];
}

export function MovieGrid({ movies }: MovieGridProps) {
    if (!movies || movies.length === 0) {
        return (
            <div className="flex items-center justify-center p-12">
                <p className="text-xl text-center text-gray-500 dark:text-gray-400">
                    No hay películas para mostrar.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}