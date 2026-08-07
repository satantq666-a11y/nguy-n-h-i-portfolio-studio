import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout cho /case-studies và các trang con /case-studies/<slug>. */
export const Route = createFileRoute("/case-studies")({
  component: () => <Outlet />,
});
