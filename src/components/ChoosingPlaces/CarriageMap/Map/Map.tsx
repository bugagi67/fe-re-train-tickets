import type { SupportedScheme } from "./SCHEMES.ts";
import { SCHEMES } from "./SCHEMES.ts";
import styles from "./Map.module.css"
import { setDeparture } from "../../../../redux/slice/selectedSlice.ts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store/store.ts";

interface ISeat {
  index: number,
  available: boolean | "active",
}

interface IMap {
  [key: number]: boolean | "active",
}

type Block = (typeof SCHEMES)["first"][number];
type ThirdBlock = (typeof SCHEMES)["third"][number];


export const Map = ({ type, seats }: { type: SupportedScheme, seats: ISeat[] }) => {
  const { currentCarriage } = useSelector((state: RootState) => state.selectedSlice)
  const dispatch = useDispatch();
  const seatsMap: IMap = seats.reduce((acc: IMap, seat: ISeat) => {
    acc[seat.index] = seat.available;
    return acc;
  }, {})

  useEffect(() => {
  }, [currentCarriage?.seats])

  const handleClickSeat = (num: number): void => {
    dispatch(setDeparture(num))
  }

  if (type === "first") {
    const firstScheme = SCHEMES.first;
    return (
      <div style={{ margin: "0 auto 80px" }}>
        <div className={styles.wagon}>
          {firstScheme.map((block: Block, i: number) => {
            return (
              <div key={i} className={`${styles.block} ${block.type === "compartment"
                ? styles.compartment : styles.side}`}>
                {block.seats.map((num: number) => {
                  const available: boolean | "active" = seatsMap[num];
                  return (<div
                    onClick={() => handleClickSeat(num)}
                    style={{ borderBottom: "2px solid #aaa" }} key={num}
                    className={`${styles.seat} ${available === "active" ? styles.active : available === true ? styles.free : styles.taken}`}>{num}</div>)
                })}
              </div>)
          }
          )}
        </div>
        <div className={styles.wagon_divider}></div>
      </div>
    )
  }

  if (type === "second") {
    const secondScheme = SCHEMES.second;
    return (
      <div style={{ margin: "0 auto 80px" }}>
        <div className={styles.wagon}>
          {secondScheme.map((block: Block, i: number) => {
            return (
              <div key={i} className={`${styles.block} ${block.type === "compartment"
                ? styles.compartment : styles.side}`}>
                {block.seats.map((num) => {
                  const available = seatsMap[num];
                  return (
                    <div key={num}
                      onClick={() => handleClickSeat(num)}
                      className={`${styles.second_border} ${styles.seat} ${available === "active" ? styles.active : available === true ? styles.free : styles.taken} `}>
                      {num}
                    </div>)
                })}
              </div>)
          }
          )}
        </div>
        <div className={styles.wagon_divider}></div>
      </div >
    )
  }

  if (type === "fourth") {
    const fourthScheme = SCHEMES.fourth;
    return (
      <div style={{ margin: "0 auto 80px" }}>
        <div className={styles.wagon}>
          {fourthScheme.map((block: Block, i: number) => {
            const showDivider: boolean = i === 7;
            return (
              <>
                <div key={i} style={{ borderRight: "none" }}
                  className={`${styles.block} 
                     ${i > 7 ? styles.compartment_bottom : null} 
                     ${block.type === "compartment"
                      ? styles.compartment : styles.side} `}>
                  {block.seats.map((num: number) => {
                    const available = seatsMap[num];
                    return (
                      <div style={{ margin: "2px" }}
                        onClick={() => handleClickSeat(num)}
                        key={num}
                        className={`${styles.seat} ${available === "active" ? styles.active : available === true ? styles.free : styles.taken}`}>
                        {num}
                      </div>)
                  })}
                </div>
                {showDivider &&
                  <div style={{ borderBottom: "none" }} className={styles.wagon_divider}></div>}
              </>
            )
          }
          )}
        </div>
      </div>
    )
  }
  if (type === "third") {
    const thirdScheme = SCHEMES.third as readonly ThirdBlock[];
    return (
      <div style={{ margin: "0 auto 80px" }}>
        <div className={styles.wagon}>
          {thirdScheme.map((block: ThirdBlock, i: number) => {
            const unit = "left" in block ? block.left : block.right;
            return (
              <div key={i}
                className={`${styles.block} 
                 ${unit.type === "compartment" ? styles.compartment : styles.side}`}>
                {unit.seats.map((num: number) => {
                  const available: boolean | "active" = seatsMap[num];
                  return (
                    <div key={num}
                      className={`${styles.seat} ${available === "active" ? styles.active : available === true ? styles.free : styles.taken}`}>
                      {num}
                    </div>)
                })}
              </div>)
          }
          )}
        </div>
      </div>
    )
  }
}
