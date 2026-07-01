// Resolve a file in /public to a URL. On Vercel the site is served from the
// root, so public files live at "/<file>". Full http(s) links pass through.
export function asset(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return "/" + path.replace(/^\//, "");
}
