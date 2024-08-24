import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import './style.css';

const ProductItem = ({ product }) => {
    return (
        <div className="item">
            <img src={product.image} alt={product.topic} />
            <div className="introduce">
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">{product.topic}</div>
                <div className="des">{product.introduction}</div>
                <button className="seeMore">SEE MORE</button>
            </div>
            <div className="detail">
                <div className="title">{product.title}</div>
                <div className="des">{product.description}</div>
                <div className="specifications">
                    {product.specifications.map((spec, index) => (
                        <div key={index}>
                            <p>{spec.label}</p>
                            <p>{spec.value}</p>
                        </div>
                    ))}
                </div>
                <div className="checkout">
                    <button>ADD TO CART</button>
                    <button>CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

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

        let unAcceppClick;

        const showSlider = (type) => {
            nextButton.style.pointerEvents = 'none';
            prevButton.style.pointerEvents = 'none';

            carousel.classList.remove('next', 'prev');
            let items = document.querySelectorAll('.carousel .list .item');
            if (type === 'next') {
                listHTML.appendChild(items[0]);
                carousel.classList.add('next');
            } else {
                listHTML.prepend(items[items.length - 1]);
                carousel.classList.add('prev');
            }
            clearTimeout(unAcceppClick);
            unAcceppClick = setTimeout(() => {
                nextButton.style.pointerEvents = 'auto';
                prevButton.style.pointerEvents = 'auto';
            }, 2000);
        };

        nextButton.onclick = () => {
            showSlider('next');
        };

        prevButton.onclick = () => {
            showSlider('prev');
        };

        // Select the seeMore buttons after the component has mounted
        const seeMoreButtons = document.querySelectorAll('.seeMore');
        seeMoreButtons.forEach((button) => {
            button.onclick = () => {
                carousel.classList.remove('next', 'prev');
                carousel.classList.add('showDetail');
            };
        });

        backButton.onclick = () => {
            carousel.classList.remove('showDetail');
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
                <button id="prev" ref={prevButtonRef}>&lt;</button>
                <button id="back" ref={backButtonRef}>See All</button>
                <button id="next" ref={nextButtonRef}>&gt;</button>
            </div>
        </div>
    );
};

MainSlider.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            topic: PropTypes.string.isRequired,
            introduction: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            specifications: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default MainSlider;
