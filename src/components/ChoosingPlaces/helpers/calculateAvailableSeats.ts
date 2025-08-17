export const calculateAvailableSeats = (
  arr: { index: number; available: boolean | string }[],
  type: "top" | "bottom" | "all"
): number => {
  let top: number = 0;
  let bottom: number = 0;
  arr.forEach((item) => {
    const isAvailable = item.available === true || item.available === "active";
    if (!isAvailable) return;
    if (item.available !== true) return;
    if (item.index % 2 === 0) {
      top++;
    } else {
      bottom++;
    }
  });
  return type === "top"
    ? top
    : type === "bottom"
    ? bottom
    : type === "all"
    ? bottom + top
    : 0;
};
