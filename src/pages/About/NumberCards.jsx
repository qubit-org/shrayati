// src/components/NumberCard.js
import React, { useState, useEffect, useRef } from 'react';
import './NumberCard.css'; // Importing the CSS file

const formatNumber = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  } 
  else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K';
  }
   else {
    return number + '+';
  }
};

const NumberCard = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const target = number;
      let start = 0;
      const increment = () => {
        start += Math.ceil(target / 100); // Increment step
        if (start < target) {
          setCount(start);
          setTimeout(increment, 10);
        } else {
          setCount(target);
        }
      };
      increment();
    }
  }, [isVisible, number]);

  return (
    <div className="card" ref={cardRef}>
      <div className="count">{formatNumber(count)}</div>
      <div className="label">{label}</div>
    </div>
  );
};

const NumberCards = () => {
  return (
    <div className="cards-container">
      <NumberCard number={20} label="Team Members" />
      <NumberCard number={2024} label="Year Founded" />
      <NumberCard number={1000} label="Users" />
      <NumberCard number={69000000} label="Funding" />
    </div>
  );
};

export default NumberCards;
