import {fetchLastTickets} from "../redux/thunks/asyncThunks.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const useGetLastTickets = () => {
  // @ts-ignore
  const {loading, error, lastTickets} = useSelector(state => state.lastTickets)
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchLastTickets());
  }, [dispatch]);
  return {loading, error, lastTickets}
}