import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHeader, SiteLayout } from "@/components/site-layout";
import { profile } from "@/lib/site-data";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ — Nguyễn Hải" },
      {
        name: "description",
        content:
          "Gửi lời nhắn cho Nguyễn Hải qua form liên hệ, email hoặc các kênh mạng xã hội.",
      },
      { property: "og:title", content: "Liên hệ — Nguyễn Hải" },
      { property: "og:description", content: "Cùng làm nội dung tử tế và hiệu quả nhé!" },
      { property: "og:url", content: "/lien-he" },
    ],
    links: [{ rel: "canonical", href: "/lien-he" }],
  }),
  component: Page,
});

function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Liên hệ"
        desc="Có dự án, có ý tưởng, hay chỉ muốn nói chuyện về content? Nhắn mình nhé."
      />

      <section className="mx-auto grid max-w-5xl gap-8 px-4 pt-10 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <form
          className="paper space-y-4 p-5 sm:p-6"
          onSubmit={(e) => {
            e.preventDefault();
            const subject = encodeURIComponent(`Lời nhắn từ ${form.name || "website"}`);
            const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
            window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
            toast.success("Đang mở email của bạn để gửi lời nhắn!");
          }}
        >
          <div>
            <label htmlFor="name" className="font-mono text-sm font-bold">
              Tên của bạn
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-lg border-2 border-foreground bg-background px-3 py-2 text-sm outline-none focus:bg-sand"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-lg border-2 border-foreground bg-background px-3 py-2 text-sm outline-none focus:bg-sand"
              placeholder="ban@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-sm font-bold">
              Lời nhắn
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-lg border-2 border-foreground bg-background px-3 py-2 text-sm outline-none focus:bg-sand"
              placeholder="Mình muốn hợp tác về..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-sky px-5 py-2.5 font-mono text-sm font-bold transition-transform hover:-translate-y-0.5"
          >
            Gửi lời nhắn <Send className="h-4 w-4" />
          </button>
        </form>

        <aside className="space-y-4">
          <div className="paper-soft space-y-3 p-5 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a className="underline decoration-dotted" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              {profile.phone}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              {profile.location}
            </p>
          </div>
          <div className="paper-soft p-5">
            <h2 className="font-mono text-sm font-bold">Mạng xã hội</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="sticker bg-leaf"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
