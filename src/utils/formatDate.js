export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
  });
}