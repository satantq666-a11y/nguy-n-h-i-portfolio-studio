import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import { LinkBadges } from "@/components/detail-links";
import { gallery } from "@/lib/site-data";

export const Route = createFileRoute("/thiet-ke")({
  head: () => ({
    meta: [
      { title: "Thiết kế & Gallery — Nguyễn Hải" },
      {
        name: "description",
        content:
          "Gallery hình ảnh thiết kế đồ hoạ, ấn phẩm truyền thông và video YouTube của Nguyễn Hải.",
      },
      { property: "og:title", content: "Thiết kế & Gallery — Nguyễn Hải" },
      {
        property: "og:description",
        content: "Lưới trưng bày ấn phẩm thiết kế và các video nổi bật.",
      },
      { property: "og:url", content: "/thiet-ke" },
    ],
    links: [{ rel: "canonical", href: "/thiet-ke" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Gallery"
        title="Dự án / Thiết kế"
        desc="Ấn phẩm đồ hoạ và dự án cá nhân, kèm link video YouTube khi có."
      />

      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <Link
              key={g.slug}
              to="/thiet-ke/$slug"
              params={{ slug: g.slug }}
              className="paper-soft group block overflow-hidden transition-transform hover:-translate-y-1"
            >
              <figure>
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <figcaption className="flex items-center justify-between gap-3 border-t border-border p-4">
                  <span className="min-w-0 truncate font-mono text-sm">{g.title}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <LinkBadges links={g.links} />
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
