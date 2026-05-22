"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

export default function Hero() {
  const { scrollY } = useScroll();
  const yIllust = useTransform(scrollY, [0, 600], [0, -80]);
  const rotate = useTransform(scrollY, [0, 600], [0, -3]);

  return (
    <section id="hero" className="hero">
      <div className="hero-18">18+</div>

      <div className="hero-title">
        <img src="/assets/svg/title.svg" alt="Скейт Кэмп" className="hero-title-svg" />
        <span className="t3">в сибири!</span>
      </div>

      <motion.div
        className="hero-illustration"
        style={{ y: yIllust, rotate }}
      >
        <video src="/imgs/bgvideo.webm" autoPlay muted loop playsInline />
      </motion.div>

      

      <div className="hero-dates">
        <img src="/assets/svg/dates.svg" alt="5-12" className="hero-dates-svg" />
        <span className="place">дивногорск</span>
      </div>

      <div className="hero-cta">
        <div className="cta-btn-wrapper">
          <img src="/assets/svg/arrow_right.svg" alt="" className="cta-arrow cta-arrow-right" />
          <a href="#register" className="cta-btn">Зарегистрироваться</a>
          <img src="/assets/svg/arrow_left.svg" alt="" className="cta-arrow cta-arrow-left" />
          <a href="#" className="hero-privacy">Политика конфиденциальности</a>
        </div>
        <div className="hero-discount">
          <img src="/assets/svg/squat.svg" alt="Сквот" className="squat-logo" />
          <div className="text">
            <strong>скидка<br/>5 тыс.руб</strong>
            <span>для клиентов <b>сквот</b></span>
          </div>
        </div>
      </div>
    </section>
  );
}
