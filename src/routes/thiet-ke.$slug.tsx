import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import { DetailLinks } from "@/components/detail-links";
import { gallery } from "@/lib/site-data";

export const Route = createFileRoute("/thiet-ke/$slug")({
  loader: ({ params }) => {
    const item = gallery.find((g) => g.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ params, loaderData }) => {
    const item = loaderData?.item;
    if (!item) {
      return {
        meta: [{ title: "Không tìm thấy dự án" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: `${item.title} — Thiết kế · Nguyễn Hải` },
        { name: "description", content: item.desc },
        { property: "og:title", content: `${item.title} — Thiết kế` },
        { property: "og:description", content: item.desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/thiet-ke/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/thiet-ke/${params.slug}` }],
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
        title="Không tìm thấy dự án"
        desc="Dự án này có thể đã được đổi tên hoặc chưa được thêm vào."
      />
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <Link to="/thiet-ke" className="font-mono text-sm underline decoration-dotted">
          ← Về gallery thiết kế
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
        desc="Bạn thử tải lại trang hoặc quay lại gallery nhé."
      />
    </SiteLayout>
  );
}

function Page() {
  const { item } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHeader eyebrow="Thiết kế" title={item.title} desc={item.desc} />

      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <Link
          to="/thiet-ke"
          className="inline-flex items-center gap-2 font-mono text-sm underline decoration-dotted"
        >
          <ArrowLeft className="h-4 w-4" /> Về gallery thiết kế
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

            {item.body && item.body.length > 0 && (
              <section className="paper space-y-3 p-5 sm:p-6">
                <h2 className="text-lg font-bold">Về dự án</h2>
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
            {item.tags && item.tags.length > 0 && (
              <section className="paper-soft p-5">
                <h2 className="font-mono text-sm font-bold uppercase tracking-wide">Công cụ</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <li key={t} className="tag-chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
