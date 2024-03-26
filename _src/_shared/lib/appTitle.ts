const baseTitle = "Kuma";

export const appTitle = (title?: string) => {
  return title && title.trim().length > 0
    ? `${title} | ${baseTitle}`
    : baseTitle;
};
