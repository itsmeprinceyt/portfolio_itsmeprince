import ResumePage from "../(components)/Pages/ResumePage";

export const metadata = {
  title: "Resume",
  description:
    "View and download the resume of Mohd Uvaish (ItsMe Prince), showcasing skills, experience, and technical expertise.",
  alternates: {
    canonical: "/resume",
  },
};

export default function Resume() {
  return <ResumePage />;
}
