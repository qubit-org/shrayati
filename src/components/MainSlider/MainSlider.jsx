import React, { useEffect, useRef } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const truncateText = (text, maxLength = 200) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const ProductItem = React.memo(({ product }) => {
    return (
        <div className="item">
            <img src={product.image} alt={product.topic}  loading="lazy" className='transparent-back' />
            <div className="introduce">
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">{product.topic}</div>
                <div className="des">{truncateText(product.introduction)}</div>
                <button className="seeMore">View Details</button>
            </div>
            <div className="detail">
                <div className="title">{product.title}</div>
                <div className="des">{truncateText(product.description)}</div>
                <div className="specifications">
                    {product.specifications.map((spec, index) => (
                        <div key={index}>
                            <p>{spec.label}</p>
                            <p>{spec.value}</p>
                        </div>
                    ))}
                </div>
                <div className="checkout">
                    <button>
                        <a href="https://darkgray-donkey-340304.hostingersite.com/shop/" target="_blank">
                        Buy Now
                        </a>
                        </button>
             
                </div>
            </div>
        </div>
    );
});

const MainSlider = ({ products }) => {
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const carouselRef = useRef(null);
    const listHTMLRef = useRef(null);
    const backButtonRef = useRef(null);

    useEffect(() => {
        const nextButton = nextButtonRef.current;
        const prevButton = prevButtonRef.current;
        const carousel = carouselRef.current;
        const listHTML = listHTMLRef.current;
        const backButton = backButtonRef.current;

        const showSlider = (type) => {
            nextButton.style.pointerEvents = 'none';
            prevButton.style.pointerEvents = 'none';

            carousel.classList.remove('next', 'prev');
            let items = listHTML.children;
            if (type === 'next') {
                listHTML.appendChild(items[0]);
                carousel.classList.add('next');
            } else {
                listHTML.prepend(items[items.length - 1]);
                carousel.classList.add('prev');
            }
            setTimeout(() => {
                nextButton.style.pointerEvents = 'auto';
                prevButton.style.pointerEvents = 'auto';
            }, 0);
        };

        const handleClickNext = () => showSlider('next');
        const handleClickPrev = () => showSlider('prev');
        const handleClickSeeMore = () => carousel.classList.add('showDetail');
        const handleClickBack = () => carousel.classList.remove('showDetail');

        nextButton.addEventListener('click', handleClickNext);
        prevButton.addEventListener('click', handleClickPrev);
        backButton.addEventListener('click', handleClickBack);

        const seeMoreButtons = document.querySelectorAll('.seeMore');
        seeMoreButtons.forEach((button) =>
            button.addEventListener('click', handleClickSeeMore)
        );

        return () => {
            nextButton.removeEventListener('click', handleClickNext);
            prevButton.removeEventListener('click', handleClickPrev);
            backButton.removeEventListener('click', handleClickBack);
            seeMoreButtons.forEach((button) =>
                button.removeEventListener('click', handleClickSeeMore)
            );
        };
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list" ref={listHTMLRef}>
                {products.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))}
            </div>
            <div className="arrows">
                <button id="prev" ref={prevButtonRef}>
                    <KeyboardArrowLeftIcon/>
                </button>
                <button id="back" ref={backButtonRef}>See All</button>
                <button id="next" ref={nextButtonRef}>
                    <KeyboardArrowRightIcon/>
                </button>
            </div>
        </div>
    );
};



export default MainSlider;
