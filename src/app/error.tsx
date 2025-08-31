const error = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold">Ups! Algo salió mal.</h1>
                <p className="py-6">Intenta volver a cargar la página.</p>
            </div>
        </div>
    );
};

export default error;