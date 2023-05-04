import React, { useContext } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Restauran from "../../assets/image/restauran.png";
import Random from "../../assets/image/random.png";
import Shop from "../../assets/image/Shop.png";
import vr from "../../assets/image/vr.png";
import Gym from "../../assets/image/gym2.png";
import food from "../../assets/image/portfolio5.png";
import { themeContext } from "../Context";
import "./Portfolio.css";
const Portfolio = () => {
  const data = [
    {
      img: Restauran,
      url: "https://yasamangandomkar.github.io/restauran",
      title:
        "Implement by HTML ,CSS ,react js.This project has been implemented in a responsive design. you can see live in this link",
    },
    {
      img: Random,
      url: "https://yasamangandomkar.github.io/random-user",
      title:
        "Implement by HTML ,CSS ,react js.This project has been implemented in a responsive design. you can see live in this link",
    },
    {
      img: Shop,
      url: "https://yasamangandomkar.github.io/shop",
      title:
        "This app is like a simple online shopping cart which you can add and remove item.implement by HTML ,CSS,react js.in this project I used redux for state management.you can see live in this link",
    },

    {
      img: Gym,
      url: "https://yasamangandomkar.github.io/gym",
      title:
        "please turn on vpn for visit this website . Implement by HTML,CSS , fetch api , rapid api react js.This project has been implemented in a responsive design.in this project I used rapid api .",
    },
    {
      img: vr,
      url: "https://yasamangandomkar.github.io/vr",
      title:
        "in this project i used react ,aos for animation, tailwindcss for design .",
    },

    {
      img: food,
      url: "https://yasamangandomkar.github.io/food",
      title: "in this project I used redux-toolkit for state management",
    },
  ];

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
            width: 300,
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
        {data.map((item, index) => (
          <SwiperSlide className="slide">
            <a key={index} className="overlay" href={item.url} target="_blank">
              <img src={item.img} alt="" />
              <div className="detail">
                <p>{item.title}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
