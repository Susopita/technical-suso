import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

interface MovieCardProps {
    movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/placeholder.png'; // Asegúrate de tener una imagen de placeholder

    return (
        <Card className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 group">
            <CardContent className="p-0">
                <Image
                    src={posterUrl}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className="w-full h-auto object-cover"
                />
                <div className="inset-0 bg-black/50 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-white text-lg font-bold truncate">{movie.title}</h3>
                </div>
            </CardContent>
        </Card>
    );
}