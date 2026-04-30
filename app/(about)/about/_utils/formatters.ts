export const formatLink = (url: string) =>
  !url ? "#" : url.startsWith("http") ? url : `https://${url}`;

export const getUsername = (url: string) => {
  if (!url) return "@username";
  try {
    const parsed = new URL(formatLink(url));
    const username = parsed.pathname.replace(/^\/+/, "").split("/")[0];
    if (!username) return "@username";
    return username.startsWith("@") ? username : `@${username}`;
  } catch {
    return "@username";
  }
};
