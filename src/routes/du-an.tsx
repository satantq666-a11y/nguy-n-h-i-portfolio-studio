import { createFileRoute } from "@tanstack/react-router";
import { Youtube } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import { commsProjects, mediaProjects, skills, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/du-an")({
  head: () => ({
    meta: [
      { title: "Dự án nổi bật — Nguyễn Hải" },
      {
        name: "description",
        content:
          "Các dự án media (edit video, ấn phẩm thiết kế) và dự án truyền thông nổi bật của Nguyễn Hải.",
      },
      { property: "og:title", content: "Dự án nổi bật — Nguyễn Hải" },
      {
        property: "og:description",
        content: "Media projects và các chiến dịch truyền thông đã thực hiện.",
      },
      { property: "og:url", content: "/du-an" },
    ],
    links: [{ rel: "canonical", href: "/du-an" }],
  }),
  component: Page,
});

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="paper overflow-hidden">
      <img
        src={p.image}
        alt={p.title}
        loading="lazy"
        width={1024}
        height={768}
        className="aspect-[4/3] w-full border-b-2 border-foreground object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="tag-chip">
              {t}
            </li>
          ))}
        </ul>
        {p.youtube && (
          <a
            href={p.youtube}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-mono text-sm underline decoration-dotted"
          >
            <Youtube className="h-4 w-4 shrink-0" /> Xem trên YouTube
          </a>
        )}
      </div>
    </article>
  );
}

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Featured Projects"
        title="Dự án nổi bật"
        desc="Hai nhóm dự án chính: sản phẩm media và các dự án truyền thông / branding."
      />

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <h2 className="text-2xl font-bold">Media Projects</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Dự án edit video và các ấn phẩm thiết kế.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <h2 className="text-2xl font-bold">Dự án truyền thông nổi bật</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Chiến dịch truyền thông, case study branding và nội dung editorial.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commsProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <h2 className="text-2xl font-bold">Kỹ năng</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <li
              key={s}
              className="tag-chip"
              style={{
                backgroundColor:
                  i % 3 === 0 ? "var(--sand)" : i % 3 === 1 ? "var(--sky)" : "var(--leaf)",
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
