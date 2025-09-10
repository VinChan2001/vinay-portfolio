import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <main className="container py-14">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        A few case studies that show how I design, build, and ship.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            blurb={p.blurb}
            tags={p.tags}
            links={p.links}
          />
        ))}
      </div>
    </main>
  );
}