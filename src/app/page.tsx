'use client';

import { useState, useEffect } from 'react';
import { usePopularMovies } from '@/hooks/usePopularMovies';

import { MovieGrid } from '@/components/MovieGrid';
import { SearchBar } from '@/components/SearchBar';
import { GenreFilter } from '@/components/GenreFilter';
import { Pagination } from '@/components/Pagination';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useDiscoverMovies } from '@/hooks/useDiscoverMovies';

const fetchPopularMovies = async (page = 1) => {
  const { results, total_pages } = await usePopularMovies({
    page,
    include_adult: false,
  });
  return { results, total_pages };
};

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageFilter, setCurrentPageFilter] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPagesFilter, setTotalPagesFilter] = useState(0);
  const [genreId, setGenreId] = useState(-1);

  const loadMovies = async () => {
    const { results, total_pages } = await fetchPopularMovies(
      currentPage
    );
    setMovies(results);
    setTotalPages(total_pages);
  };

  const loadMoviesFilter = async () => {
    const { total_pages, results } = await useDiscoverMovies({
      with_genres: `${genreId}`,
      include_adult: false,
      page: currentPage,
    });
    setFilteredMovies(results);
    setTotalPagesFilter(total_pages);
  };

  useEffect(() => {
    loadMovies();
  }, [currentPage]);

  useEffect(() => {
    loadMoviesFilter();
  }, [currentPageFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageChangeFilter = (page: number) => {
    setCurrentPageFilter(page);
  };

  const handleFilterChange = (genreId: number) => {
    console.log("Filtering by genre ID:", genreId);
    // Nota: La API no filtra por género, así que tendrías que
    // hacer la lógica de filtrado aquí en el cliente o hacer otra llamada a la API
    // a la ruta /discover/movie con el parámetro with_genres
    setGenreId(genreId);

    if (genreId === -1) {
      setCurrentPageFilter(1);
      setShowFilter(false);
      return;
    }

    loadMoviesFilter();
    setShowFilter(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center">
        <SearchBar />
        <ThemeSwitcher />
      </header>

      <main className="flex-grow pt-20">
        <section className="p-4 md:p-8 lg:p-12">
          <div className="flex justify-end mb-4">
            <GenreFilter onFilterChange={handleFilterChange} />
          </div>
          {showFilter ? <MovieGrid movies={filteredMovies} /> : <MovieGrid movies={movies} />}
        </section>
      </main>

      <footer className="py-4">
        {showFilter ? (
          <Pagination
            currentPage={currentPageFilter}
            totalPages={totalPagesFilter}
            onPageChange={handlePageChangeFilter}
          />
        ) : (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </footer>
    </div>
  );
}