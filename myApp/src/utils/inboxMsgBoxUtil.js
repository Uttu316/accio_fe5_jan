window.dates = {};

export const isDateToDisplay = (msg) => {
  const { date, id } = msg;
  let isday = false;
  if (!window.dates[date]) {
    window.dates[date] = id;
  }
  if (window.dates[date] === id) {
    isday = true;
  }

  return isday;
};
