import SurprisePage from "../(components)/Pages/SurprisePage";

export const metadata = {
  title: "Surprise",
  description: "A fun and interactive surprise page from ItsMe Prince.",
  alternates: {
    canonical: "/surprise",
  },
};

export default function Surprise() {
  return <SurprisePage />;
}
