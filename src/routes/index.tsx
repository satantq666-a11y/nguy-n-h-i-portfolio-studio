import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.png";
import { SiteLayout } from "@/components/site-layout";
import { profile, skills } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nguyễn Hải — Portfolio Truyền thông & Content" },
      {
        name: "description",
        content:
          "Portfolio của Nguyễn Hải, cử nhân Truyền thông: dự án media, case study branding, kỹ năng content và thiết kế.",
      },
      { property: "og:title", content: "Nguyễn Hải — Portfolio Truyền thông & Content" },
      {
        property: "og:description",
        content: "Nội dung có ích, hiệu quả truyền thông rõ ràng và một chút hài hước.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="min-w-0">
            <span className="sticker bg-leaf">{profile.role}</span>
            <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
              {profile.greeting}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{profile.tagline}</p>
            <p className="mt-4 max-w-xl">
              Mình là người <strong>chủ động</strong> và <strong>linh hoạt</strong>, thích học cái
              mới mỗi ngày và luôn hỏi “nội dung này giúp được gì cho người đọc?” trước khi bắt tay
              làm. Từ viết content, dựng video đến lên chiến dịch — mình muốn mỗi sản phẩm đều mang
              lại giá trị và hiệu quả truyền thông đo được.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/du-an"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-sky px-5 py-2.5 font-mono text-sm font-bold transition-transform hover:-translate-y-0.5"
              >
                Xem dự án <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/lien-he"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-2.5 font-mono text-sm font-bold transition-colors hover:bg-sand"
              >
                Rủ mình làm việc
              </Link>
            </div>
          </div>

          <div className="paper mx-auto w-full max-w-xs overflow-hidden p-4">
            <img
              src={avatar}
              alt="Ảnh đại diện minh hoạ của Nguyễn Hải"
              width={768}
              height={768}
              className="w-full rounded-lg bg-sand"
            />
            <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
              “Deadline là bạn, không phải kẻ thù.” — chắc vậy.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="h-5 w-5 shrink-0" /> Kỹ năng
        </h2>
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

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { k: "Chủ động", v: "Tự tìm việc cần làm, không đợi được nhắc." },
            { k: "Linh hoạt", v: "Đổi hướng nhanh khi dữ liệu nói khác kế hoạch." },
            { k: "Học hỏi", v: "Mỗi dự án là một khoá học ngắn miễn phí." },
          ].map((item) => (
            <div key={item.k} className="paper-soft p-5">
              <h3 className="text-lg font-bold">{item.k}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.v}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
