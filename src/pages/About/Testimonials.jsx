import React from 'react';
import "./Testimonial.css";
import "swiper/css";import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const reviewData = [
    {
      id: 1,
      imgSrc: "https://i.imgur.com/ObnrCh9.jpeg",
      day: "12",
      monthYear: "Jan, 2024",
      reviewer: "Rajesh Kumar - Customer",
      review: "Shrayati's eco-friendly products are amazing! Affordable, biodegradable, and natural—perfect for my sustainable lifestyle. Their commitment to the environment is truly inspiring. Highly recommended!",
    },
    {
      id: 2,
      imgSrc: "https://i.imgur.com/hRrBvPV.jpeg",
      day: "18",
      monthYear: "Feb, 2024",
      reviewer: "Anita Verma - Customer",
      review: "I’ve been using Shrayati’s biodegradable products for months now. Excellent quality, and very affordable. It's great to see such dedication to eco-friendly living. Great job, Shrayati",
    },
    {
      id: 3,
      imgSrc: "https://i.imgur.com/aDNF7oC.jpeg",
      day: "25",
      monthYear: "Mar, 2024",
      reviewer: "Suresh Patel - Customer",
      review: "Shrayati’s natural products are perfect for my home. I appreciate their focus on sustainability and affordability. They've become my trusted source for eco-friendly essentials",
    },
    {
      id: 4,
      imgSrc: "https://i.imgur.com/zdhtLTd.jpeg",
      day: "10",
      monthYear: "Apr, 2024",
      reviewer: "Pooja Sharma - Customer",
      review: "Absolutely love Shrayati’s eco-friendly products! Great quality at reasonable prices. It's wonderful to support a brand that's truly making a positive impact on the environment.",
    },
    // {
    //   id: 5,
    //   imgSrc: "https://i.imgur.com/V3d027T.jpeg",
    //   day: "5",
    //   monthYear: "May, 2024",
    //   reviewer: "Anjali Mehta - Customer",
    //   review: "Eco-friendly tissues and paper towels are soft and durable. Great for daily use!",
    // },
    // {
    //   id: 6,
    //   imgSrc: "./imgs/review-06.jpg",
    //   day: "30",
    //   monthYear: "Jun, 2024",
    //   reviewer: "Ravi Gupta - Customer",
    //   review: "I’m impressed by the jute bags collection, highly durable and perfect for shopping.",
    // },
    // {
    //   id: 7,
    //   imgSrc: "./imgs/review-07.jpg",
    //   day: "15",
    //   monthYear: "Jul, 2024",
    //   reviewer: "Neha Kapoor - Customer",
    //   review: "The wooden dish tray is so unique and eco-friendly. A perfect kitchen item!",
    // }
  ];
 return (
    <div id="rev">
      <Swiper
        className="mySwiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {reviewData.map((review) => (
          <SwiperSlide key={review.id}>
            <div id="feedRev">
              <div id="dp">
                <img src={review.imgSrc} alt={`${review.reviewerName}`} />
              </div>
              <h1>“{review.review}”</h1>
              <div>
                <div id="blue">{review.reviewer}</div>
                <small>{review.monthYear}</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Testimonials;
