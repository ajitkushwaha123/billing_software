export const filterOrders = (Orders , statusArray) => {
  return Orders.filter((order) =>
    statusArray.some((status) => status === order.status)
  );
};
