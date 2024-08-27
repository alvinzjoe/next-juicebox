"use client"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from "./Button";
import AnimatedText from "./AnimatedText";
import { useRouter } from 'next/navigation'
const Slider = () => {
  const swiperRef = useRef(null);
  const router = useRouter()
  return (
    <div className="w-full max-w-2xl block mx-auto h-[35vh]">
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => swiperRef.current = swiper}
        onSlideChange={() => console.log('slide change')}
        className='h-full'
        >
          <SwiperSlide>
            <AnimatedText text="Professionals around the world shared how they feel about technology and I've listened. Now it's your turn." />
            <Button variant="outline" onClick={() => swiperRef.current.slideNext()} className="mb-4 mt-8 absolute bottom-0">
            Continue
          </Button>
          </SwiperSlide>
          <SwiperSlide>
            <AnimatedText text='I’ll ask you a handful of meaningful questions and compare your responses with people in your industry. ' />
            <Button variant="outline" onClick={() => swiperRef.current.slideNext()} className="mb-4 mt-8 absolute bottom-0">
              Continue
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <AnimatedText text='You’ll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!' />
            <Button variant="white" onClick={() => router.push('/forms')} className="mb-4 mt-8 absolute bottom-0">
              Get started
            </Button>
          </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Slider;
