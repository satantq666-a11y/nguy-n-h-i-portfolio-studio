import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import { DetailLinks } from "@/components/detail-links";
import { caseStudies, type CaseStudy } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const item = caseStudies.find((c) => c.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ params, loaderData }) => {
    const item = loaderData?.item;
    if (!item) {
      return {
        meta: [{ title: "Không tìm thấy case study" }, { name: "robots", content: "noindex" }],
      };
    }
    const desc = item.result;
    return {
      meta: [
        { title: `${item.title} — Case study · Nguyễn Hải` },
        { name: "description", content: desc },
        { property: "og:title", content: `${item.title} — Case study` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/case-studies/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/case-studies/${params.slug}` }],
    };
  },
  component: Page,
  errorComponent: DetailError,
  notFoundComponent: DetailNotFound,
});

function DetailNotFound() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="404"
        title="Không tìm thấy case study"
        desc="Case study này có thể đã được đổi tên hoặc chưa được thêm vào."
      />
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <Link to="/case-studies" className="font-mono text-sm underline decoration-dotted">
          ← Về danh sách case studies
        </Link>
      </div>
    </SiteLayout>
  );
}

function DetailError() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Lỗi"
        title="Không tải được nội dung"
        desc="Bạn thử tải lại trang hoặc quay lại danh sách nhé."
      />
    </SiteLayout>
  );
}

function Page() {
  const { item } = Route.useLoaderData() as { item: CaseStudy };

  return (
    <SiteLayout>
      <PageHeader eyebrow="Case study" title={item.title} desc={item.problem} />

      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 font-mono text-sm underline decoration-dotted"
        >
          <ArrowLeft className="h-4 w-4" /> Về danh sách case studies
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <img
              src={item.image}
              alt={item.title}
              width={1024}
              height={768}
              className="paper w-full object-cover"
            />

            <section className="paper p-5 sm:p-6">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-mono font-bold">Vấn đề</dt>
                  <dd className="text-muted-foreground">{item.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono font-bold">Cách làm</dt>
                  <dd className="text-muted-foreground">{item.approach}</dd>
                </div>
                <div>
                  <dt className="font-mono font-bold">Kết quả</dt>
                  <dd className="text-muted-foreground">{item.result}</dd>
                </div>
              </dl>
            </section>

            {item.body && item.body.length > 0 && (
              <section className="paper space-y-3 p-5 sm:p-6">
                <h2 className="text-lg font-bold">Chi tiết quá trình</h2>
                {item.body.map((p) => (
                  <p key={p} className="text-sm text-muted-foreground">
                    {p}
                  </p>
                ))}
              </section>
            )}

            {item.images && item.images.length > 0 && (
              <section className="grid gap-4 sm:grid-cols-2">
                {item.images.map((src, i) => (
                  <img
                    key={src + i}
                    src={src}
                    alt={`${item.title} — hình ${i + 1}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="paper-soft aspect-[4/3] w-full object-cover"
                  />
                ))}
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <DetailLinks links={item.links} />
            <section className="paper-soft p-5">
              <h2 className="font-mono text-sm font-bold uppercase tracking-wide">Kỹ năng dùng</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <li key={t} className="tag-chip">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
