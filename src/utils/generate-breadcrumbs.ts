export function generateBreadcrumbs(path: string): Array<{ label: string; href: string }> {
  if (!path) return [];

  const tokens = String(path)
    .split("/")
    .filter((t) => t !== "");

  let tokenPath = "";
  const crumbs = tokens.map((t) => {
    tokenPath += "/" + t;
    t = (t = t.replace(/-/g, " ")).charAt(0).toUpperCase() + t.slice(1).toLowerCase();

    return {
      label: t,
      href: tokenPath,
    };
  });

  crumbs.unshift({ label: "Home", href: "/" });

  return crumbs;
}
