export const filterParams = (params: any) =>
  Object.fromEntries(
    // eslint-disable-next-line no-unused-vars
    Object.entries(params).filter(([_, v]) => v !== null && v !== undefined)
  );