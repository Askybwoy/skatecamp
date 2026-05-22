import Reveal from "./Reveal";

const coaches = [
  {
    name: "алексей\nнаймушин",
    photo: "/imgs/coach1_naimyshin.png",
    badge: "Если откликается, присоединяйся!",
    meta: "Главный тренер Федерации Скейтбординга Красноярского края. 25 лет — опыт в скейтбординге",
    quote: "Очень жду в Сибири скейтеров со всей страны. Участникам с других городов поможем в организации и подберём снаряжение. Стоимость сделали максимально доступной, потому что наша главная цель — это формирование сообщества, объединённого любовью к катанию и самосовершенствованию.",
    reverse: false,
    arrow: "/assets/svg/vector12_coach1.svg",
  },
  {
    name: "Маркел\nандронов",
    photo: "/imgs/coach2_andronov.png",
    badge: "Безопасный прогресс — наш приоритет!",
    meta: "Член сборной России по скейтбордингу, старший тренер сборной Красноярского края. Многократный победитель и призёр всероссийских и международных соревнований",
    quote: "Очень жду в Сибири скейтеров со всей страны. Участникам с других городов поможем в организации и подберём снаряжение. Стоимость сделали максимально доступной, потому что наша главная цель — это формирование сообщества, объединённого любовью к катанию и самосовершенствованию.",
    reverse: true,
    arrow: "/assets/svg/vector13_coach2.svg",
  },
  {
    name: "вячеслав\nсердюк",
    photo: "/imgs/coach3_serdyuk.png",
    badge: "В нашей компании\nзаряд энергии гарантирован!",
    meta: "Президент Федерации скейтбординга Новосибирской области. 27 лет — опыт в скейтбординге",
    quote: "Еду из Новосибирска специально на кэмп. Такое пропустить нельзя! Будем повышать скилы вместе.",
    reverse: false,
    arrow: "/assets/svg/vector15_coach3.svg",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="coaches">
      <Reveal>
        <div className="section-title-wrap section-title-wrap--coaches">
          <img
            src="/assets/svg/vector_coaches_title.svg"
            alt=""
            className="decor-arrow decor-arrow-coaches-title"
          />
          <h2 className="section-title">ТРЕНЕРА</h2>
        </div>
      </Reveal>

      {coaches.map((c, i) => (
        <Reveal key={c.name} delay={i * 0.1} y={60}>
          <div className={`coach coach--${i + 1} ${c.reverse ? "coach--reverse" : ""}`}>
            <div className="coach-photo">
              <img src={c.photo} alt={c.name.replace("\n", " ")} />
              <span className="badge">{c.badge.split("\n").map((line, j) => (
                  <span key={j} style={{ display: "block" }}>{line}</span>
                ))}</span>
            </div>
            <img src={c.arrow} alt="" className={`decor-arrow decor-arrow-coach decor-arrow-coach${i + 1}`} />
            <div className="coach-info">
              <h3>
                {c.name.split("\n").map((line, j) => (
                  <span key={j} style={{ display: "block" }}>{line}</span>
                ))}
              </h3>
              <p className="coach-meta">{c.meta}</p>
              <p className="coach-quote">
                {i === 0 ? (
                  <>
                    Очень жду в Сибири скейтеров со всей страны. Участникам с других городов поможем в организации и подберём снаряжение.
                    <br />
                    <br />
                    Стоимость сделали максимально доступной, потому что наша главная цель — это формирование сообщества, объединённого любовью к катанию и самосовершенствованию.
                  </>
                ) : i === 1 ? (
                  <>
                    Очень жду в Сибири скейтеров со всей страны. Участникам с других городов поможем в организации и подберём снаряжение.
                    <br />
                    <br />
                    Стоимость сделали максимально доступной, потому что наша главная цель — это формирование сообщества, объединённого любовью к катанию и самосовершенствованию.
                  </>
                ) : i === 2 ? (
                  <>
                    Еду из Новосибирска специально на кэмп. Такое пропустить нельзя!
                    <br />
                    <br />
                    Будем повышать скилы вместе.
                  </>
                ) : (
                  c.quote
                )}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
