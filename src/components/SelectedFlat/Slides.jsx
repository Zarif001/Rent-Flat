import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import img1 from '../../images/Flats/flat1.png'
import img2 from '../../images/Flats/flat2.png'
import img3 from '../../images/Flats/flat3.png'
import img4 from '../../images/Flats/flat4.png'
import './Slides.scss'


function Slides() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);


  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        <div>
          <img className='sliderImg' src={img1} alt="" />
        </div>
        <div>
          <img className='sliderImg' src={img2} alt="" />
        </div>
        <div>
          <img className='sliderImg' src={img3} alt="" />
        </div>
        <div>
          <img className='sliderImg' src={img4} alt="" />
        </div>
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <img className='sliderImg' src={img1} alt="" />
        </div>
        <div>
          <img className='sliderImg' src={img2} alt="" />
        </div>
        <div>
          <img className='sliderImg' src={img3} alt="" />
        </div>
        <div>
          <img className='sliderImg' src={img4} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Slides;
