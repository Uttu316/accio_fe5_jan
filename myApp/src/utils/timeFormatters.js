export const get12Hour = (timeStamp) => {
  const time = new Date(timeStamp);
  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export function getStartOfDayTime(inputTimestamp = new Date().getTime()) {
  // Create a Date object from the input timestamp
  const date = new Date(inputTimestamp);

  // Get the year, month, and day from the date
  const year = date.getFullYear();
  const month = date.getMonth(); // Note: January is 0, December is 11
  const day = date.getDate();

  // Create a new Date object for the start of the day (midnight)
  const startOfDay = new Date(year, month, day);

  // Return the timestamp for the start of the day
  return startOfDay.getTime();
}

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);

  // Set the time of today and yesterday to midnight
  today.setHours(0, 0, 0, 0);
  yesterday.setHours(0, 0, 0, 0);
  yesterday.setDate(today.getDate() - 1);

  // Check if the date is today
  if (date >= today) {
    return "Today";
  }
  // Check if the date is yesterday
  else if (date >= yesterday) {
    return "Yesterday";
  }
  // Format the date in DD/MM/YY
  else {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
    return `${day}/${month}/${year}`;
  }
}
