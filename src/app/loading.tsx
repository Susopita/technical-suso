const loading = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold">Cargando...</h1>
                <p className="py-6">Espere mientras se carga la página.</p>
            </div>
        </div>
    );
};

export default loading;