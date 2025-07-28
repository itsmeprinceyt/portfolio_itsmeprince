import {SpinnerWhite} from "./Spinner";

export default function Loader() {
    return (
        <div className="bg-black fixed inset-0 z-100 flex flex-col items-center justify-center text-center p-4 text-white select-none">
            <div className="flex items-center gap-3 mb-4">
                <SpinnerWhite />
                <h1 className="text-xl font-bold tracking-widest animate-pulse">
                    LOADING
                </h1>
            </div>
            <p className="text-xs text-gray-400">Reload if it’s taking too long :3</p>
        </div>
    );
}
