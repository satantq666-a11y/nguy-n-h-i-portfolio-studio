import { Youtube, Facebook, HardDrive, Globe } from "lucide-react";
import type { LinkType, SiteLink } from "@/lib/site-data";

const iconFor: Record<LinkType, typeof Youtube> = {
  youtube: Youtube,
  facebook: Facebook,
  drive: HardDrive,
  web: Globe,
};

const bgFor: Record<LinkType, string> = {
  youtube: "bg-leaf",
  facebook: "bg-sky",
  drive: "bg-sand",
  web: "bg-sky",
};

/** Danh sách liên kết ngoài (YouTube / Facebook / Google Drive / website). */
export function DetailLinks({
  links,
  title = "Liên kết",
}: {
  links?: SiteLink[] | undefined;
  title?: string;
}) {
  if (!links || links.length === 0) return null;

  return (
    <section className="paper-soft p-5">
      <h2 className="font-mono text-sm font-bold uppercase tracking-wide">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((l) => {
          const Icon = iconFor[l.type];
          return (
            <li key={l.href + l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border-2 border-foreground px-3 py-2 transition-transform hover:-translate-y-0.5"
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-foreground ${bgFor[l.type]}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0 break-words font-mono text-sm">{l.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** Nhóm icon nhỏ hiển thị ở thẻ trong trang danh sách. */
export function LinkBadges({ links }: { links?: SiteLink[] | undefined }) {
  if (!links || links.length === 0) return null;

  return (
    <ul className="flex items-center gap-2">
      {links.map((l) => {
        const Icon = iconFor[l.type];
        return (
          <li
            key={l.href + l.label}
            aria-hidden
            className={`grid h-7 w-7 place-items-center rounded-full border-2 border-foreground ${bgFor[l.type]}`}
          >
            <Icon className="h-3.5 w-3.5" />
          </li>
        );
      })}
    </ul>
  );
}
