export const calcTotalprice = (items) =>
  items.reduce((acc, cake) => (acc += cake.price), 0);
