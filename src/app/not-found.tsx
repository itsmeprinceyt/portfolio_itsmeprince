import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-8">
                Oops! The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
