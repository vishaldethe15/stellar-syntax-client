export const formatDate = (date) => {
  const newdate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = newdate.toLocaleDateString("en-US", options);
  return formattedDate;
};
