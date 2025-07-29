import phone from "./contactsicons/phone.svg";
import mail from "./contactsicons/mail.svg";
import geo from "./contactsicons/geolocation.svg";
import skype from "./contactsicons/skype.svg";
import styles from "./Contacts.module.css"

export const Contacts = () => {
  return (
    <section className={styles.contacts_footer }>
      <h4 className={styles.footer_title}>Свяжитесь с нами</h4>
      <ul>
        <li>
          <img src={phone} alt="Иконка телефона" />
          <a type="tel" href="tel:88000000000">
            8 (800) 000 00 00
          </a>
        </li>
        <li>
          <img src={mail} alt="Иконка телефона" />
          <a type="email" href="mailto::inbox@mail.ru">
            inbox@mail.ru
          </a>
        </li>
        <li>
          <img src={skype} alt="Иконка телефона" />
          <a type="tel" href="skype:tu.train.tickets">
            tu.train.tickets
          </a>
        </li>
        <li>
          <img src={geo} alt="Иконка телефона" />
          <a target="_blank" href="https://yandex.ru/maps/-/CHrLq4LX">
            г. Москва ул. Московская 27-35 555 555
          </a>
        </li>
      </ul>
    </section>
  );
};
