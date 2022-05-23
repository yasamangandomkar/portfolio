import React, { useContext } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Restauran from "../../assets/image/restauran.png";
import Shop from "../../assets/image/Shop.png";
import Dolla from "../../assets/image/Dolla.png";
import Game from "../../assets/image/Game.png";
import { themeContext } from "../Context";
import "./Portfolio.css";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "#fff" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          300: {
            width: 400,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide className="slide">
          <a
            className="overlay"
            href="https:///geektor.ir/snake_game"
            target="_blank"
          >
            <img src={Game} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https:///geektor.ir/rwsy"
            target="_blank"
            className="overlay"
          >
            <img src={Dolla} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://yasamangandomkar.ir/restauran"
            target="_blank"
            className="overlay"
          >
            <img src={Restauran} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://yasamangandomkar.ir/shop"
            target="_blank"
            className="overlay"
          >
            <img src={Shop} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
