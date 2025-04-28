import PageWrapper from "./(components)/PageWrapper";

export default function NotFound() {
    return (
        <PageWrapper>
        <div className="flex flex-col items-center justify-center h-screen text-center p-4 text-white pointer-events-none">
            <h1 className="text-5xl font-bold mb-4 animate-pulse">404</h1>
            <p className="text-xs mb-8 text-white">
                Oops! The page you are looking for does not exist.
            </p>
        </div>
        </PageWrapper>
    );
}
