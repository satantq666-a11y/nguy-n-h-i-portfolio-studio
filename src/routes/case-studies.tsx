import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import { LinkBadges } from "@/components/detail-links";
import { caseStudies } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Branding Case Studies — Nguyễn Hải" },
      {
        name: "description",
        content:
          "Các case study branding và chiến dịch truyền thông: vấn đề, cách làm và kết quả cụ thể.",
      },
      { property: "og:title", content: "Branding Case Studies — Nguyễn Hải" },
      {
        property: "og:description",
        content: "Từ vấn đề thương hiệu đến kết quả truyền thông đo được.",
      },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Case Studies"
        title="Branding Case Studies"
        desc="Mỗi case study kể lại: vấn đề gặp phải, cách mình xử lý và kết quả thu được."
      />

      <section className="mx-auto max-w-5xl space-y-8 px-4 pt-10 sm:px-6">
        {caseStudies.map((c, i) => (
          <Link
            key={c.slug}
            to="/case-studies/$slug"
            params={{ slug: c.slug }}
            className="paper block overflow-hidden transition-transform hover:-translate-y-1"
          >
            <article>
              <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full border-b-2 border-foreground object-cover md:border-r-2 md:border-b-0"
                />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="sticker bg-sky">Case #{i + 1}</span>
                    <LinkBadges links={c.links} />
                  </div>
                  <h2 className="mt-3 text-xl font-bold">{c.title}</h2>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-mono font-bold">Vấn đề</dt>
                      <dd className="text-muted-foreground">{c.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono font-bold">Cách làm</dt>
                      <dd className="text-muted-foreground">{c.approach}</dd>
                    </div>
                    <div>
                      <dt className="font-mono font-bold">Kết quả</dt>
                      <dd className="text-muted-foreground">{c.result}</dd>
                    </div>
                  </dl>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <li key={t} className="tag-chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-bold underline decoration-dotted">
                    Xem chi tiết <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
