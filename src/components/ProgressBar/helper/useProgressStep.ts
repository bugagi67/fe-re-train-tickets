import { useLocation } from "react-router-dom"

export const useProgressStep: () => 1|2|3|4|0 = () => {
  const location = useLocation();

  if (location.pathname.includes("/trains")) return 1;
  if (location.pathname.includes("/passengers")) return 2;
  if (location.pathname.includes("/payment")) return 3;
  if (location.pathname.includes("/confirm")) return 4;

  return 0;
}