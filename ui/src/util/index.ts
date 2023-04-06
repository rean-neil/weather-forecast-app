export const kelvinToFahrenheit = (kelvin: number) => {
  const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
  return fahrenheit.toFixed(0);
};

export const formatDate = (date: string) => {
  const today = new Date(date);
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const year = today.getFullYear();
  return `${month}/${day}/${year}`;
};
