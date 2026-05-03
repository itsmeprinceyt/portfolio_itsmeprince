import ServicesPage from "../(components)/Pages/Services";

export const metadata = {
  title: "Services",
  description:
    "Explore the services I offer including full stack web development, frontend development, backend APIs, and custom web solutions.",
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return <ServicesPage />;
}
