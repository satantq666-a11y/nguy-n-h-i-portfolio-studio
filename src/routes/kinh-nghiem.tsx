import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import { achievements, education, experience, skills } from "@/lib/site-data";

export const Route = createFileRoute("/kinh-nghiem")({
  head: () => ({
    meta: [
      { title: "Kinh nghiệm & Resume — Nguyễn Hải" },
      {
        name: "description",
        content: "Học vấn, kinh nghiệm làm việc, kỹ năng và thành tích của Nguyễn Hải.",
      },
      { property: "og:title", content: "Kinh nghiệm & Resume — Nguyễn Hải" },
      {
        property: "og:description",
        content: "Hành trình học và làm trong ngành truyền thông.",
      },
      { property: "og:url", content: "/kinh-nghiem" },
    ],
    links: [{ rel: "canonical", href: "/kinh-nghiem" }],
  }),
  component: Page,
});

function Timeline({
  items,
}: {
  items: { period: string; title: string; org: string; detail: string }[];
}) {
  return (
    <ol className="mt-6 space-y-4">
      {items.map((it) => (
        <li key={it.title} className="paper-soft p-5">
          <span className="font-mono text-xs text-muted-foreground">{it.period}</span>
          <h3 className="mt-1 text-lg font-bold">{it.title}</h3>
          <p className="font-mono text-sm">{it.org}</p>
          <p className="mt-2 text-sm text-muted-foreground">{it.detail}</p>
        </li>
      ))}
    </ol>
  );
}

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Resume"
        title="Kinh nghiệm / Resume"
        desc="Học vấn, trải nghiệm làm việc, kỹ năng và một vài thành tích nho nhỏ."
      />

      <section className="mx-auto max-w-5xl px-4 pt-10 sm:px-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <GraduationCap className="h-5 w-5 shrink-0" /> Học vấn
        </h2>
        <Timeline items={education} />
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <Briefcase className="h-5 w-5 shrink-0" /> Kinh nghiệm
        </h2>
        <Timeline items={experience} />
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6">
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

      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <Award className="h-5 w-5 shrink-0" /> Thành tích
        </h2>
        <ul className="mt-5 space-y-3">
          {achievements.map((a) => (
            <li key={a} className="paper-soft flex gap-3 p-4 text-sm">
              <span aria-hidden>⭐</span>
              {a}
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
