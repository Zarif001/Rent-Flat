import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import BoxContainer from '../BoxContainer/BoxContainer'
import styles from './Review.module.scss'
import './Slider.scss'
import RatingStars from "../RatingStars/RatingStars";

function Reviews() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className={styles.sliderContainer}>
    <BoxContainer>
      <h2 className={styles.title}>
      Отзывы клиентов
      </h2>
      <Slider {...settings} >
        <div className={styles.items}>
          <div className={styles.caption}>
            <h3>Уютная квартира</h3>
            <RatingStars initialRating={3}/>
          </div>
          <p className={styles.text}>
          Первый раз отдыхали в Березниках, времени было мало соответственно жильё искали заранее. Залог вносили с опасением, и очень рады что они были напрасными. Всё супер. Нам понравилось!
          </p>
          <div className={styles.captionBox}>
            <div>
            <h5>Екатерина Трушникова </h5>
            <span>г. Пермь</span>
            </div>
              <p className={styles.data}>2 января 2021</p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.caption}>
            <h3>Клёвый вид на город</h3>
            <RatingStars initialRating={4}/>
          </div>
          <p className={styles.text}>
          Хочу поблагодарить за квартиру на ул. Юбилейной, д. 108. Удобное месторасположение, совсем рядом с центром. Квартира уютная, соседей не слышно, мы прекрасно отдохнули. Все что нужно для приготовления еды есть.
          </p>
          <div className={styles.captionBox}>
            <div>
            <h5>Иван Огородников</h5>
            <span>г. Краснокамск</span>
            </div>
              <p className={styles.data}>15 сентября 2019</p>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.caption}>
            <h3>Современная квартира</h3>
            <RatingStars initialRating={5}/>
          </div>
          <p className={styles.text}>
          "Современная квартира" призвана удовлетворить самые высокие стандарты комфорта. Интерьер создан с использованием последних тенденций в дизайне, предоставляя пространство, наполненное светом и воздухом. 
          </p>
          <div className={styles.captionBox}>
            <div>
            <h5>Иван Грозный</h5>
            <span>Москва</span>
            </div>
              <p className={styles.data}>5 января 2011</p>
          </div>
        </div>
  
        
      </Slider>
    </BoxContainer>
    </div>

  );
}

export default Reviews;
