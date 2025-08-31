'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";

export function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSearch = (e: any) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de búsqueda
        console.log('Buscando:', query);
    };

    return (
        <form onSubmit={handleSearch} className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-xl z-50">
            <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar películas..."
                className="rounded-full shadow-lg"
            />
        </form>
    );
}