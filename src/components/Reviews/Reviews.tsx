import styles from "./Reviews.module.css";
import { Review } from "./Review/Review";
import { useState, useEffect, useRef, useCallback } from "react";

interface ReviewData {
    name: string,
    review: string,
    image: string,
}

interface ReviewsProps {
    reviews: ReviewData[]
}

export const Reviews = ({ reviews }: ReviewsProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);

    const reviewsPerPage = 2;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            return (prevIndex + 1) % totalPages;
        });
    }, [totalPages]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        resetInterval();
    };

    const startInterval = useCallback(() => {
        intervalId.current = setInterval(nextSlide, 5000);
    }, [nextSlide]);

    const resetInterval = useCallback(() => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
        startInterval();
    }, [startInterval]);

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        }
    }, [startInterval]);

    useEffect(() => {
        if (containerRef.current) {
            const translateXValue = -currentIndex * 25;
            containerRef.current.style.transform = `translateX(${translateXValue}%)`;
        }
        resetInterval();
    }, [currentIndex, resetInterval]);

    return (
        <section className={styles.carousel} id="reviews">
            <h2>ОТЗЫВЫ</h2>
            <div className={styles.carousel_inner}>
                <div className={styles.reviews_carousel}>
                    <div
                        className={styles.reviews_container}
                        ref={containerRef}
                        style={{ width: `${totalPages * 100}%` }}
                    >
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <div
                                key={pageIndex}
                                className={styles.review_slide}
                                style={{ width: `${100 / totalPages}%` }}
                            >
                                {reviews
                                    .slice(
                                        pageIndex * reviewsPerPage,
                                        (pageIndex + 1) * reviewsPerPage
                                    )
                                    .map((review, index) => (
                                        <Review key={index} {...review} />
                                    ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles.carousel_dots}>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
