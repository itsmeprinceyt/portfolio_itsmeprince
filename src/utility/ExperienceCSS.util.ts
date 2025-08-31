const base: string = "px-4 py-2 text-xs rounded-lg shadow-lg/10 hover:shadow-md/20 hover:scale-x-105";

const colors: Record<string, string> = {
  yellow:
    "border border-yellow-500/20 text-yellow-400 shadow-yellow-500",
  blue:
    "border border-blue-500/20 text-blue-400 shadow-blue-500",
  emerald:
    "border border-emerald-500/20 text-emerald-400 shadow-emerald-500",
};

export function getTagStyle(color: "yellow" | "blue" | "emerald") {
  return `${base} ${colors[color]}`;
}