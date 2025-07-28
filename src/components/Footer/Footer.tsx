import { Contacts } from "./Contacts/Contacts";
import { SubscribeForm } from "./SubscribeForm/SubscribeForm";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.footer_main }>
        <Contacts />
        <SubscribeForm />
      </div>
    </footer>
  );
};
