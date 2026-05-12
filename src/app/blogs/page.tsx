import BlogsPage from "../(components)/Pages/BlogsPage";

export const metadata = {
  title: "Blogs",
  description:
    "View and read latest blogs from Mohd Uvaish (ItsMe Prince). Uncut & 100% Real and YES! I will use em-dash.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function Blogs() {
  return <BlogsPage />;
}
