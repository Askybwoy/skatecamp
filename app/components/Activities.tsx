"use client";

import { useLayoutEffect, useRef, useState } from "react";

const cards = [
  {
    img: "/imgs/card1_cottage-3f6c8e.png",
    title: "Проживание в коттедже среди хвойного леса",
    text: "Уютные дома с комфортом посреди соснового бора. Свежий воздух, тишина и полное отключение от городской суеты.",
  },
  {
    img: "/imgs/card2_skatepark.png",
    title: "Скейтпарк и слэклайн",
    text: "Бетонный парк, спроектированный для обучения: плавные радиусы, правильные фигуры и безопасное покрытие. После катания тренируем баланс и координацию на слэклайне.",
  },
  {
    img: "/imgs/card3_video.png",
    title: "Видеоразбор и скейт-ликбез",
    text: "Разбираем ваше катание по записи, находим точки роста и объясняем, как прогрессировать быстрее. Параллельно проходим базовую теорию: от устройства доски до этикета в парке.",
  },
  {
    img: "/imgs/card4_yacht.png",
    title: "Прогулка на яхте",
    text: "Выездной день на воде: отдыхаем, загораем и смотрим на сибирские пейзажи Красноярского моря с палубы.",
  },
  {
    img: "/imgs/card5_sup.png",
    title: "САП-сёрфинг по тёплой реке",
    text: "Сплавляемся на досках с веслом, проходим пороги и просто кайфуем от воды быстрой Маны.",
  },
];

const GAP = 40;
const VISIBLE = 3;

export default function Activities() {
  const [offset, setOffset] = useState(0);
  const [step, setStep] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const recompute = () => {
      const track = trackRef.current;
      if (!track) return;
      const firstCard = track.querySelector(".card") as HTMLElement | null;
      if (!firstCard) return;
      const cardW = firstCard.getBoundingClientRect().width;
      const s = cardW + GAP;
      setStep(s);
      setMaxOffset((cards.length - VISIBLE) * s);
    };
    recompute();
    const t = setTimeout(recompute, 100);
    window.addEventListener("resize", recompute);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", recompute);
    };
  }, []);

  const go = (dir: number) => {
    setOffset((prev) => Math.max(0, Math.min(prev + dir * step, maxOffset)));
  };

  return (
    <section id="activities" className="activities">
      <div className="section-title-wrap">
        <h2 className="section-title">чем займемся?</h2>
        <img src="/assets/svg/vector6_activities.svg" alt="" className="decor-arrow decor-arrow-activities" />
      </div>

      <div className="slider-viewport">
        <div className="slider-track" ref={trackRef} style={{ transform: `translateX(${-offset}px)` }}>
          {cards.map((c) => (
            <article key={c.title} className="card">
              <div className="card-img" style={{ backgroundImage: `url('${c.img}')`, backgroundSize: "cover" }} />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="slider-nav">
        <button className="slider-btn" onClick={() => go(-1)} disabled={offset === 0} aria-label="Назад">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="slider-btn" onClick={() => go(1)} disabled={offset >= maxOffset || step === 0} aria-label="Вперёд">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </section>
  );
}
