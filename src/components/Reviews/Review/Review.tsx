import styles from "../Reviews.module.css"

interface ReviewProps {
    name: string,
    review: string,
    image: string,
}

export const Review = ({ name, review, image }: ReviewProps) => {
  return (
    <div className={`${styles.item_review} review`}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p className={styles.review_content}>"{review}"</p>
      </div>
    </div>
  );
};
