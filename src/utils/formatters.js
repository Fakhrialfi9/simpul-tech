export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long", timeZone: "UTC" });
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
