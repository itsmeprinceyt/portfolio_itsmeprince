const base: string = "px-3 py-1 text-xs rounded-full shadow-md/10 hover:text-black hover:shadow-md/20";

const colors: Record<string, string> = {
  yellow:
    "bg-yellow-800/10 border border-yellow-500 text-yellow-500 shadow-yellow-500 hover:bg-yellow-500",
  blue:
    "bg-blue-800/10 border border-blue-500 text-blue-500 shadow-blue-500 hover:bg-blue-500",
  green:
    "bg-green-800/10 border border-green-500 text-green-500 shadow-green-500 hover:bg-green-500",
};

export function getTagStyle(color: "yellow" | "blue" | "green") {
  return `${base} ${colors[color]}`;
}