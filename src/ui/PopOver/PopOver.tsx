import { PopOverItem } from "./PopOverItem"
import styles from "./PopOver.module.css"

export const PopOver = ({ priceInfo, dataType }: { priceInfo: any, dataType: any }) => {
  return (
    <div className={styles.pop_over}>
      <PopOverItem priceInfo={priceInfo} dataType={dataType} />
    </div>
  )
}