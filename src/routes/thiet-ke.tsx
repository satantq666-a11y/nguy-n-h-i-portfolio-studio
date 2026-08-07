import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout cho /thiet-ke và các trang con /thiet-ke/<slug>. */
export const Route = createFileRoute("/thiet-ke")({
  component: () => <Outlet />,
});
