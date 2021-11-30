const format = (value) => {
  return Intl.NumberFormat("de-DE", {
    currency: "BRL",
    style: "currency",
  }).format(value);
};
export default format;
