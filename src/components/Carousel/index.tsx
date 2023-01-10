import * as S from '../Home/style'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../index.css";
import 'animate.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";


export default function index() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="mySwiper animate__animated animate__zoomIn animate__delay-3s"
    >
        {/* Card React Native | ReactJs */}
      <SwiperSlide>
        <S.Cards>
          <S.CardContent>
            <S.CardImage color='#61dafb'>
              <S.Icon color='#61dafb' className="fa-brands fa-react"></S.Icon>
            </S.CardImage>
            <S.CardIcons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-regular fa-star"></S.Icons>
            </S.CardIcons>
            <S.TextCard>
              React Native | ReactJs
            </S.TextCard>
            <S.SubText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </S.SubText>
            <S.Link color='#61dafb'>
              Saiba mais
            </S.Link>
          </S.CardContent>
        </S.Cards>
      </SwiperSlide>
        {/* Card VueJs */}
      <SwiperSlide>
        <S.Cards>
          <S.CardContent>
            <S.CardImage color='#42d392'>
              <S.Icon color='#42d392' className="fa-brands fa-react"></S.Icon>
            </S.CardImage>
            <S.CardIcons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-regular fa-star"></S.Icons>
            </S.CardIcons>
            <S.TextCard>
              VueJs
            </S.TextCard>
            <S.SubText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </S.SubText>
            <S.Link color='#42d392'>
              Saiba mais
            </S.Link>
          </S.CardContent>
        </S.Cards>
      </SwiperSlide>
        {/* Card Javascript */}
      <SwiperSlide>
        <S.Cards>
          <S.CardContent>
            <S.CardImage color='#ffff59'>
              <S.Icon color='#ffff59' className="fa-brands fa-node-js"></S.Icon>
            </S.CardImage>
            <S.CardIcons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-regular fa-star"></S.Icons>
            </S.CardIcons>
            <S.TextCard>
              Javascript
            </S.TextCard>
            <S.SubText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </S.SubText>
            <S.Link color='#ffff59' href="javascript: alert('Página em desenvolvimento')">
              Saiba mais
            </S.Link>
          </S.CardContent>
        </S.Cards>
      </SwiperSlide>
        {/* Card HTML5 */}
      <SwiperSlide>
        <S.Cards>
          <S.CardContent>
            <S.CardImage color='#e44c25'>
              <S.Icon color='#e44c25' className="fa-brands fa-html5"></S.Icon>
            </S.CardImage>
            <S.CardIcons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-regular fa-star"></S.Icons>
            </S.CardIcons>
            <S.TextCard>
              HTML5
            </S.TextCard>
            <S.SubText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </S.SubText>
            <S.Link color='#e44c25'>
              Saiba mais
            </S.Link>
          </S.CardContent>
        </S.Cards>
      </SwiperSlide>
        {/* Card Styled Components */}
      <SwiperSlide>
        <S.Cards>
          <S.CardContent>
            <S.CardImage color='#bf4080'>
              <S.Icon color='#bf4080' className="fa-brands fa-sass"></S.Icon>
            </S.CardImage>
            <S.CardIcons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-solid fa-star"></S.Icons>
              <S.Icons className="fa-regular fa-star"></S.Icons>
            </S.CardIcons>
            <S.TextCard>
              Styled Components
            </S.TextCard>
            <S.SubText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </S.SubText>
            <S.Link color='#bf4080'>
              Saiba mais
            </S.Link>
          </S.CardContent>
        </S.Cards>
      </SwiperSlide>
    </Swiper>
  )
}
