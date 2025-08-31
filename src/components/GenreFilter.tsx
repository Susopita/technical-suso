'use client';

import { useState, useEffect } from 'react';
import { useMovieGenres } from '@/hooks/useMovieGenres';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Genres } from '@/interfaces/movies/Genres';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';

interface GenreFilterProps {
    onFilterChange: (genreId: number) => void;
}

export function GenreFilter({ onFilterChange }: GenreFilterProps) {
    const [genres, setGenres] = useState<Genres[]>([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        async function fetchGenres() {
            try {
                const data = await useMovieGenres();
                setGenres(data.genres);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        }
        fetchGenres();
    }, []);

    const handleFilter = (gender: string) => {
        console.log("Gender:", genres.find((genre) => genre.id === Number(gender)));
        if (gender === '-1') {
            setSelectedGenre('');
            onFilterChange(-1);
            return;
        }
        setSelectedGenre(gender);
        onFilterChange(Number(gender));
    };

    return (
        <Select onValueChange={handleFilter} value={selectedGenre}>
            <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrar por género" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Géneros</SelectLabel>
                    <SelectItem value="-1">Todos</SelectItem>
                    {genres.map((genre) => (
                        <SelectItem key={genre.id} value={String(genre.id)}>
                            {genre.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}