export const get12Hour = (timeStamp) => {
  const time = new Date(timeStamp);
  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
