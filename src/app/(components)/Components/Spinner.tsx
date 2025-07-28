// Spinner.tsx

const SpinnerWhite = () => (
    <svg
        className="animate-spin h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-10"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            className="opacity-100"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
        />
    </svg>
);

const SpinnerStone = () => (
    <svg
        className="animate-spin h-6 w-6 text-stone-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-10"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            className="opacity-100"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
        />
    </svg>
);

export { SpinnerWhite, SpinnerStone };
