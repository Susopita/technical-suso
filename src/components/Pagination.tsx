import { Button } from "@/components/ui/button";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pagesToShow = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    if (start > 1) {
        pagesToShow.push(1);
        if (start > 2) pagesToShow.push('...');
    }

    for (let i = start; i <= end; i++) {
        pagesToShow.push(i);
    }

    if (end < totalPages) {
        if (end < totalPages - 1) pagesToShow.push('...');
        pagesToShow.push(totalPages);
    }

    return (
        <div className="flex justify-center items-center my-8 gap-2">
            <Button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                variant="outline"
            >
                Anterior
            </Button>
            {pagesToShow.map((page, index) => (
                <Button
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    variant={page === currentPage ? "default" : "outline"}
                    disabled={typeof page !== 'number'}
                >
                    {page}
                </Button>
            ))}
            <Button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                variant="outline"
            >
                Siguiente
            </Button>
        </div>
    );
}