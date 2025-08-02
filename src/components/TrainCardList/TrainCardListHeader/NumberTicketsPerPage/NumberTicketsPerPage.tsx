import {useState, useCallback, useEffect} from "react";
import {addOrChangeSearchParameter, setCurrentPage} from "../../../../redux/slice/searchParamsSlice";
import {useDispatch} from "react-redux";
import styles from "./NumberTicketsPerPage.module.css";
import {useFindRoutes} from "../../../../hooks/useFindRoutes.ts";

export const NumberTicketsPerPage = () => {
  const [quantity, setQuantity] = useState("5");
  const dispatch = useDispatch();
  const {fetchRoutes} = useFindRoutes();

  const handleClickQuantity = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.textContent || "5";
    setQuantity(value);
    dispatch(addOrChangeSearchParameter({name: "limit", value}));
    dispatch(setCurrentPage(1));
    dispatch(addOrChangeSearchParameter({name: "offset", value: "0"}));
    fetchRoutes();
  }, [dispatch]);

  useEffect(() => {
    fetchRoutes();
  }, [quantity]);


  return (
    <div className={styles.number_tickets}>
      показывать по:{" "}
      {[5, 10, 20].map((num) => (
        <span
          key={num}
          onClick={handleClickQuantity}
          style={{color: quantity === String(num) ? "#000" : undefined}}
          className={styles.quantity}
        >
          {num}
        </span>
      ))}
    </div>
  );
};