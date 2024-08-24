import React from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import { Nav } from '../../components/Nav/Nav';

const products = [
    {
        image: './imgs/prod/img2.png',
        topic: 'Jute Carry Bag',
        introduction: 'A stylish and eco-friendly jute carry bag for all your shopping needs.',
        title: 'Jute Carry Bag',
        description: 'This jute carry bag is perfect for shopping and daily use. It is made from high-quality jute material...',
        specifications: [
            { label: 'Material', value: 'Jute' },
            { label: 'Size', value: 'Large' },
            { label: 'Color', value: 'Natural' },
            { label: 'Handle', value: 'Short' },
            { label: 'Price', value: '$10' },
        ],
    },
    {
        image: './imgs/prod/img3.png',
        topic: 'Jute Lunch Bag',
        introduction: 'Perfect for carrying your lunch in an eco-friendly way.',
        title: 'Jute Lunch Bag',
        description: 'This jute lunch bag is designed to keep your food fresh and secure while being easy to carry around...',
        specifications: [
            { label: 'Material', value: 'Jute' },
            { label: 'Size', value: 'Medium' },
            { label: 'Color', value: 'Natural' },
            { label: 'Insulation', value: 'Yes' },
            { label: 'Price', value: '$8' },
        ],
    },
    {
        image: './imgs/prod/img4.png',
        topic: 'Wooden Serving Tray',
        introduction: 'A beautifully crafted wooden tray for serving food and drinks.',
        title: 'Wooden Serving Tray',
        description: 'This wooden serving tray is perfect for serving meals, snacks, and drinks...',
        specifications: [
            { label: 'Material', value: 'Wood' },
            { label: 'Size', value: 'Large' },
            { label: 'Color', value: 'Brown' },
            { label: 'Finish', value: 'Polished' },
            { label: 'Price', value: '$15' },
        ],
    },
    {
        image: './imgs/prod/img5.png',
        topic: 'Wooden Paperweight',
        introduction: 'Keep your papers in place with this elegant wooden paperweight.',
        title: 'Wooden Paperweight',
        description: 'This wooden paperweight is perfect for your desk, adding a touch of elegance while keeping your documents organized...',
        specifications: [
            { label: 'Material', value: 'Wood' },
            { label: 'Size', value: 'Small' },
            { label: 'Color', value: 'Dark Brown' },
            { label: 'Weight', value: '200g' },
            { label: 'Price', value: '$5' },
        ],
    },
    {
        image: './imgs/prod/img6.png',
        topic: 'Wooden Coffee Mug Large Size',
        introduction: 'Enjoy your coffee in this beautifully crafted large wooden mug.',
        title: 'Wooden Coffee Mug Large Size',
        description: 'This large wooden coffee mug is perfect for your morning coffee or tea...',
        specifications: [
            { label: 'Material', value: 'Wood' },
            { label: 'Size', value: 'Large' },
            { label: 'Capacity', value: '350ml' },
            { label: 'Color', value: 'Natural' },
            { label: 'Price', value: '$12' },
        ],
    },
    {
        image: './imgs/prod/img7.png',
        topic: 'Shopping Paper Bag',
        introduction: 'An eco-friendly shopping paper bag for all your shopping needs.',
        title: 'Shopping Paper Bag',
        description: 'This shopping paper bag is perfect for carrying groceries, clothes, and other items...',
        specifications: [
            { label: 'Used Time', value: '6 hours' },
            { label: 'Charging port', value: 'Type-C' },
            { label: 'Compatible', value: 'Android' },
            { label: 'Bluetooth', value: '5.3' },
            { label: 'Controlled', value: 'Touch' },
        ],
    },
    {
        image: './imgs/prod/img8.png',
        topic: 'Notebook and Wooden Pen',
        introduction: 'A reusable notebook and wooden pen set for all your writing needs.',
        title: 'Notebook and Wooden Pen',
        description: 'This notebook and wooden pen set is perfect for all your writing needs...',
        specifications: [
            { label: 'Material', value: 'Stainless Steel' },
            { label: 'Capacity', value: '750 ml' },
            { label: 'Color', value: 'Silver' },
            { label: 'Insulation', value: 'Double Wall' },
            { label: 'Price', value: '$15' },
        ],
    },
    {
        image: './imgs/prod/img9.png',
        topic: 'Jute Gift Bag',
        introduction: 'A beautifully crafted jute gift bag that adds an eco-friendly touch to any present.',
        title: 'Jute Gift Bag',
        description: 'This jute gift bag is ideal for presenting gifts in an eco-friendly manner...',
        specifications: [
            { label: 'Material', value: 'Organic Cotton' },
            { label: 'Size', value: 'S, M, L, XL' },
            { label: 'Color', value: 'White, Black, Blue' },
            { label: 'Price', value: '$20' },
        ],
    },
    {
        image: './imgs/prod/img10.png',
        topic: 'Small Tea Cup Wooden',
        introduction: 'A small tea cup made from high-quality wood, perfect for enjoying your favorite beverages.',
        title: 'Small Tea Cup Wooden',
        description: 'This small tea cup is crafted from high-quality wood, offering a unique and natural way to enjoy your beverages...',
        specifications: [
            { label: 'Material', value: 'Bamboo' },
            { label: 'Bristles', value: 'Soft' },
            { label: 'Color', value: 'Natural' },
            { label: 'Price', value: '$3' },
        ],
    },
    {
        image: './imgs/prod/img11.png',
        topic: 'Wooden Dish',
        introduction: 'A stylish wooden dish that adds a touch of elegance to your table setting.',
        title: 'Wooden Dish',
        description: 'This wooden dish is perfect for serving Homeetizers, desserts, or small meals...',
        specifications: [
            { label: 'Material', value: 'Durable Fabric' },
            { label: 'Size', value: 'Extra Large' },
            { label: 'Color', value: 'Green' },
            { label: 'Weight Capacity', value: '15 kg' },
            { label: 'Price', value: '$8' },
        ],
    },
];

const Home = () => {
    return (
        <div id='app-ol' className='home-page-oll'>
               {/* <div id="wave-se-1">
                <svg width="100vw" height="100%" id="svg"  xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
         <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,75 C 86.83253588516749,55.01913875598086 173.66507177033498,35.038277511961724 279,38 C 384.334928229665,40.961722488038276 508.17224880382776,66.86602870813397 599,77 C 689.8277511961722,87.13397129186603 747.6459330143542,81.49760765550239 837,82 C 926.3540669856458,82.50239234449761 1047.244019138756,89.14354066985646 1153,89 C 1258.755980861244,88.85645933014354 1349.377990430622,81.92822966507177 1440,75 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
       
          <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,175 C 85.58851674641147,164.77033492822966 171.17703349282294,154.54066985645935 262,146 C 352.82296650717706,137.45933014354065 448.88038277511964,130.60765550239233 562,146 C 675.1196172248804,161.39234449760767 805.3014354066986,199.02870813397132 905,206 C 1004.6985645933014,212.97129186602868 1073.9138755980862,189.27751196172247 1158,179 C 1242.0861244019138,168.72248803827753 1341.043062200957,171.86124401913878 1440,175 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
         
          <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,275 C 103.7129186602871,287.9090909090909 207.4258373205742,300.8181818181818 314,305 C 420.5741626794258,309.1818181818182 530.0095693779904,304.6363636363637 616,296 C 701.9904306220096,287.3636363636363 764.535885167464,274.6363636363636 861,271 C 957.464114832536,267.3636363636364 1087.846889952153,272.8181818181818 1190,275 C 1292.153110047847,277.1818181818182 1366.0765550239234,276.0909090909091 1440,275 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
            </div> */}
         <Nav/>
            <MainSlider products={products} />
            {/* <div id="wave-se">
                <svg width="100vw" height="100%" id="svg"  xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
         <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,75 C 86.83253588516749,55.01913875598086 173.66507177033498,35.038277511961724 279,38 C 384.334928229665,40.961722488038276 508.17224880382776,66.86602870813397 599,77 C 689.8277511961722,87.13397129186603 747.6459330143542,81.49760765550239 837,82 C 926.3540669856458,82.50239234449761 1047.244019138756,89.14354066985646 1153,89 C 1258.755980861244,88.85645933014354 1349.377990430622,81.92822966507177 1440,75 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
       
          <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,175 C 85.58851674641147,164.77033492822966 171.17703349282294,154.54066985645935 262,146 C 352.82296650717706,137.45933014354065 448.88038277511964,130.60765550239233 562,146 C 675.1196172248804,161.39234449760767 805.3014354066986,199.02870813397132 905,206 C 1004.6985645933014,212.97129186602868 1073.9138755980862,189.27751196172247 1158,179 C 1242.0861244019138,168.72248803827753 1341.043062200957,171.86124401913878 1440,175 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
         
          <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#00d084"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,400 L 0,275 C 103.7129186602871,287.9090909090909 207.4258373205742,300.8181818181818 314,305 C 420.5741626794258,309.1818181818182 530.0095693779904,304.6363636363637 616,296 C 701.9904306220096,287.3636363636363 764.535885167464,274.6363636363636 861,271 C 957.464114832536,267.3636363636364 1087.846889952153,272.8181818181818 1190,275 C 1292.153110047847,277.1818181818182 1366.0765550239234,276.0909090909091 1440,275 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
            </div> */}
         
        </div>
    );
};

export default Home;
