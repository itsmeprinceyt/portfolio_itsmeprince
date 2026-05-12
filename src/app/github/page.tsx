import GitHubPage from "../(components)/Pages/GithubPage";

export const metadata = {
  title: "GitHub Activity",
  description:
    "View latest and current GitHub Stats of Mohd Uvaish (ItsMe Prince)",
  alternates: {
    canonical: "/github",
  },
};

export default function GitHub() {
  return <GitHubPage />;
}
