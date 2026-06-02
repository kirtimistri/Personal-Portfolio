import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PersonalProjects from "@/components/PersonalProjects";
import Activities from "@/components/Activities";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kirti — Full Stack Developer" },
      { name: "description", content: "Portfolio of Kirti, a full stack developer building immersive web experiences." },
      { property: "og:title", content: "Kirti — Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Kirti, a full stack developer building immersive web experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-[#05011a] text-white">
      <Navbar />
      <Hero />
      <About />
      <PersonalProjects />
      <Activities />
      <Journey />
      <Contact />
    </main>
  );
}
