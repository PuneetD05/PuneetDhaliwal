// Resolve a file in /public to the correct URL (handles the GitHub Pages base
// path). Leaves full http(s) links untouched.
export function asset(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
