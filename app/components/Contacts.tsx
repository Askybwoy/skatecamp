import Reveal from "./Reveal";

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts-header">
        <img src="/assets/svg/vector16_contacts.svg" alt="" className="decor-arrow decor-arrow-contacts" />
        <Reveal>
          <h2 className="section-title">контакты</h2>
        </Reveal>
      </div>

      <div className="contacts-content">
        <Reveal delay={0.1}>
          <div className="contact-cards">
          <a className="contact-card" href="tel:+79232804642">
            <img src="/assets/svg/phone.svg" alt="Телефон" className="contact-icon" />
            <span>+7 923 280 4642</span>
          </a>
          <a className="contact-card tg" href="https://t.me/Alexeynaimyshin" target="_blank" rel="noopener noreferrer">
            <img src="/assets/svg/telegram.svg" alt="Telegram" className="contact-icon" />
            <span>@Alexeynaimyshin</span>
          </a>
          <a className="contact-card ig" href="https://instagram.com/wise_skate" target="_blank" rel="noopener noreferrer">
            <img src="/assets/svg/instagram.svg" alt="Instagram" className="contact-icon" />
            <span>@wise_skate</span>
          </a>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <span>2026 © Скейт-кэмп</span>
        <a href="#">Политика конфиденциальности</a>
      </footer>
    </section>
  );
}
