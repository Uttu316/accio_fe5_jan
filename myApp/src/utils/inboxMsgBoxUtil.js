let dates = {};

export const isDateToDisplay = (msg) => {
  const { date, id } = msg;
  let isday = false;
  if (!dates[date]) {
    dates[date] = id;
  }
  if (dates[date] === id) {
    isday = true;
  }

  return isday;
};
