import PageWrapper from './PageWrapper';

export default function Loader() {
    return (
        <PageWrapper>
        <div className="flex flex-col items-center justify-center h-screen text-center p-4 text-white pointer-events-none">
            <h1 className="text-xl font-bold mb-4 animate-pulse tracking-widest break-all">Loading . . .</h1>
        </div>
        </PageWrapper>
    );
}
