import styles from "./SubscribeForm.module.css";

export const SubscribeForm = () => {
    return (
        <section className={styles.footer_subscribe_form}>
            <h4 className={styles.footer_title}>Подписка</h4>
            <form>
                <label htmlFor="email">
                    <div>Будьте в курсе событий</div>
                    <input
                        type="email"
                        name="email"
                        className={styles.input_subscribe}
                        placeholder="e-mail"
                    />
                </label>
                <button type="submit">ОТПРАВИТЬ</button>
            </form>
            <h4 className={styles.footer_title}>Подписывайтесь на нас</h4>
            <div className={styles.icons_flex}>
                <a target="_blank" href="https://www.youtube.com/" className={`${styles.social_icon_youtube} ${styles.svg_icon}`}></a>
                <a target="_blank" href="https://ru.linkedin.com/" className={`${styles.social_icon_linked} ${styles.svg_icon}`}></a>
                <a target="_blank" href="https://support.google.com/" className={`${styles.social_icon_gplus} ${styles.svg_icon}`}></a>
                <a target="_blank" href="https://www.facebook.com/" className={`${styles.social_icon_facebook} ${styles.svg_icon}`}></a>
                <a target="_blank" href="https://x.com/home" className={`${styles.social_icon_twitter} ${styles.svg_icon}`}></a>
            </div>
        </section>
    );
};
