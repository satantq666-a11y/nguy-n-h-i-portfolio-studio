import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Giới thiệu" },
  { to: "/du-an", label: "Dự án nổi bật" },
  { to: "/thiet-ke", label: "Thiết kế" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/kinh-nghiem", label: "Kinh nghiệm" },
  { to: "/lien-he", label: "Liên hệ" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-foreground bg-leaf font-mono text-sm font-bold">
              NH
            </span>
            <span className="truncate font-mono text-base font-bold">{profile.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3 py-1.5 font-mono text-sm transition-colors hover:bg-sand"
                activeProps={{ className: "bg-sky font-bold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-foreground bg-sand lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <nav className="border-t-2 border-foreground bg-background px-4 py-3 lg:hidden">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block rounded-lg px-3 py-2 font-mono text-sm hover:bg-sand"
                    activeProps={{ className: "bg-sky font-bold" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t-2 border-foreground bg-sand/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">{profile.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{profile.tagline}</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a className="underline decoration-dotted" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              {profile.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="sticker">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="border-t border-border px-4 py-4 text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} — làm bằng cà phê và sự tò mò.
        </p>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
      <span className="sticker bg-leaf">{eyebrow}</span>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h1>
      {desc && <p className="mt-3 max-w-2xl text-muted-foreground">{desc}</p>}
    </div>
  );
}
