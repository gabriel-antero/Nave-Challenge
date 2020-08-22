export const calculate_age = (value) => {
  const date = new Date(value);
  const difference = Date.now() - date.getTime();
  const age = new Date(difference);

  return Math.abs(age.getUTCFullYear() - 1970);
};
