import React from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import { Nav } from '../../components/Nav/Nav';

// const products = [
//     {
//         image: './imgs/change/2.png',
//         topic: 'Jute Carry Bag',
//         introduction: 'A stylish and eco-friendly jute carry bag for all your shopping needs.',
//         title: 'Jute Carry Bag',
//         description: 'This jute carry bag is perfect for shopping and daily use. It is made from high-quality jute material...',
//         specifications: [
//             { label: 'Material', value: 'Jute' },
//             { label: 'Size', value: 'Large' },
//             { label: 'Color', value: 'Natural' },
//             { label: 'Handle', value: 'Short' },
//             { label: 'Price', value: '$10' },
//         ],
//     },
//     {
//         image: './imgs/change/3.png',
//         topic: 'Jute Lunch Bag',
//         introduction: 'Perfect for carrying your lunch in an eco-friendly way.',
//         title: 'Jute Lunch Bag',
//         description: 'This jute lunch bag is designed to keep your food fresh and secure while being easy to carry around...',
//         specifications: [
//             { label: 'Material', value: 'Jute' },
//             { label: 'Size', value: 'Medium' },
//             { label: 'Color', value: 'Natural' },
//             { label: 'Insulation', value: 'Yes' },
//             { label: 'Price', value: '$8' },
//         ],
//     },
//     {
//         image: './imgs/change/4.png',
//         topic: 'Wooden Serving Tray',
//         introduction: 'A beautifully crafted wooden tray for serving food and drinks.',
//         title: 'Wooden Serving Tray',
//         description: 'This wooden serving tray is perfect for serving meals, snacks, and drinks...',
//         specifications: [
//             { label: 'Material', value: 'Wood' },
//             { label: 'Size', value: 'Large' },
//             { label: 'Color', value: 'Brown' },
//             { label: 'Finish', value: 'Polished' },
//             { label: 'Price', value: '$15' },
//         ],
//     },
//     {
//         image: './imgs/change/5.png',
//         topic: 'Wooden Paperweight',
//         introduction: 'Keep your papers in place with this elegant wooden paperweight.',
//         title: 'Wooden Paperweight',
//         description: 'This wooden paperweight is perfect for your desk, adding a touch of elegance while keeping your documents organized...',
//         specifications: [
//             { label: 'Material', value: 'Wood' },
//             { label: 'Size', value: 'Small' },
//             { label: 'Color', value: 'Dark Brown' },
//             { label: 'Weight', value: '200g' },
//             { label: 'Price', value: '$5' },
//         ],
//     },
//     {
//         image: './imgs/change/6.png',
//         topic: 'Wooden Coffee Mug Large Size',
//         introduction: 'Enjoy your coffee in this beautifully crafted large wooden mug.',
//         title: 'Wooden Coffee Mug Large Size',
//         description: 'This large wooden coffee mug is perfect for your morning coffee or tea...',
//         specifications: [
//             { label: 'Material', value: 'Wood' },
//             { label: 'Size', value: 'Large' },
//             { label: 'Capacity', value: '350ml' },
//             { label: 'Color', value: 'Natural' },
//             { label: 'Price', value: '$12' },
//         ],
//     },
//     {
//         image: './imgs/change/7.png',
//         topic: 'Shopping Paper Bag',
//         introduction: 'An eco-friendly shopping paper bag for all your shopping needs.',
//         title: 'Shopping Paper Bag',
//         description: 'This shopping paper bag is perfect for carrying groceries, clothes, and other items...',
//         specifications: [
//             { label: 'Used Time', value: '6 hours' },
//             { label: 'Charging port', value: 'Type-C' },
//             { label: 'Compatible', value: 'Android' },
//             { label: 'Bluetooth', value: '5.3' },
//             { label: 'Controlled', value: 'Touch' },
//         ],
//     },
//     {
//         image: './imgs/change/8.png',
//         topic: 'Notebook and Wooden Pen',
//         introduction: 'A reusable notebook and wooden pen set for all your writing needs.',
//         title: 'Notebook and Wooden Pen',
//         description: 'This notebook and wooden pen set is perfect for all your writing needs...',
//         specifications: [
//             { label: 'Material', value: 'Stainless Steel' },
//             { label: 'Capacity', value: '750 ml' },
//             { label: 'Color', value: 'Silver' },
//             { label: 'Insulation', value: 'Double Wall' },
//             { label: 'Price', value: '$15' },
//         ],
//     },
//     {
//         image: './imgs/change/9.png',
//         topic: 'Jute Gift Bag',
//         introduction: 'A beautifully crafted jute gift bag that adds an eco-friendly touch to any present.',
//         title: 'Jute Gift Bag',
//         description: 'This jute gift bag is ideal for presenting gifts in an eco-friendly manner...',
//         specifications: [
//             { label: 'Material', value: 'Organic Cotton' },
//             { label: 'Size', value: 'S, M, L, XL' },
//             { label: 'Color', value: 'White, Black, Blue' },
//             { label: 'Price', value: '$20' },
//         ],
//     },
//     {
//         image: './imgs/change/10.png',
//         topic: 'Small Tea Cup Wooden',
//         introduction: 'A small tea cup made from high-quality wood, perfect for enjoying your favorite beverages.',
//         title: 'Small Tea Cup Wooden',
//         description: 'This small tea cup is crafted from high-quality wood, offering a unique and natural way to enjoy your beverages...',
//         specifications: [
//             { label: 'Material', value: 'Bamboo' },
//             { label: 'Bristles', value: 'Soft' },
//             { label: 'Color', value: 'Natural' },
//             { label: 'Price', value: '$3' },
//         ],
//     },
//     {
//         image: './imgs/change/11.png',
//         topic: 'Wooden Dish',
//         introduction: 'A stylish wooden dish that adds a touch of elegance to your table setting.',
//         title: 'Wooden Dish',
//         description: 'This wooden dish is perfect for serving Homeetizers, desserts, or small meals...',
//         specifications: [
//             { label: 'Material', value: 'Durable Fabric' },
//             { label: 'Size', value: 'Extra Large' },
//             { label: 'Color', value: 'Green' },
//             { label: 'Weight Capacity', value: '15 kg' },
//             { label: 'Price', value: '$8' },
//         ],
//     },
// ];
const products = [{
        image: './imgs/change/10.png',
        topic: 'Tissue Napkin',
        introduction: 'Our elegant tissue napkins are crafted from recycled paper, providing a sophisticated and eco-friendly option for any occasion. These napkins are designed with both style and functionality in mind, featuring a soft and absorbent texture that handles spills and messes with ease. The crisp white color enhances the visual appeal of your table setting, making these napkins suitable for both casual and formal events. Packaged in a set of 50, they offer practical coverage while supporting your commitment to reducing environmental impact.',
        title: 'Tissue Napkin',
        description: 'These tissue napkins are made from recycled paper, offering a blend of elegance and environmental responsibility. Their white color and soft texture make them a sophisticated choice for any occasion, from casual dinners to formal events. The napkins are highly absorbent, ensuring they effectively manage spills and messes. Packaged in a convenient set of 50, they provide ample coverage for your dining needs. By choosing these napkins, you’re making a commitment to both style and sustainability.',
        specifications: [
            { label: 'Material', value: 'Recycled Paper' },
            { label: 'Color', value: 'White' },
            { label: 'Pack Size', value: '50 napkins' },
            { label: 'Price', value: '$5' },
        ],
    },
    {
        image: './imgs/change/1.png',
        topic: 'Compartment Plates',
        introduction: 'Our eco-friendly compartment plates are a sustainable choice for organizing and serving various dishes. Made from recycled paper, these plates are designed to offer convenience and versatility while minimizing environmental impact. The three compartments allow you to serve multiple types of food on one plate, keeping them separated and making your meals more enjoyable. Ideal for both casual and formal settings, these plates are perfect for picnics, parties, and everyday use. Not only do they provide practical benefits, but they also support your commitment to reducing waste and protecting the environment.',
        title: 'Compartment Plates',
        description: 'These eco-friendly compartment plates are made from recycled paper, making them an ideal choice for organizing different types of food on a single plate. The compartments are designed to keep your dishes separated, making them perfect for serving meals with multiple components. The plates are sturdy yet lightweight, providing a sustainable alternative to plastic or traditional paper plates. With a natural brown color, they not only look great but also contribute to reducing your environmental footprint by being fully recyclable and compostable.',
        specifications: [
            { label: 'Material', value: 'Recycled Paper' },
            { label: 'Size', value: 'Medium' },
            { label: 'Color', value: 'Brown' },
            { label: 'Compartments', value: '3' },
            { label: 'Price', value: '$12' },
        ],
    },
    {
        image: './imgs/change/2.png',
        topic: 'Cutlery Knife',
        introduction: 'Experience the perfect blend of style and sustainability with our wooden cutlery knife. Crafted from responsibly sourced wood, this knife combines functionality with eco-conscious design. It features a sleek, smooth blade that is ideal for cutting through a variety of foods with ease. Whether you’re enjoying a casual meal at home or hosting a formal dinner, this knife adds a touch of elegance to your table setting while supporting a greener planet. Its durable construction ensures long-lasting use, making it a practical and stylish choice for any dining occasion.',
        title: 'Cutlery Knife',
        description: 'This cutlery knife is crafted from sustainably sourced wood, combining elegance with environmental responsibility. The smooth and durable blade is perfect for all types of dining needs, whether you’re cutting through meats or vegetables. Its natural wood finish offers a unique and stylish look, making it a great addition to any table setting. The knife is designed to be comfortable in hand, providing a reliable and eco-friendly alternative to plastic cutlery. Ideal for both casual meals and formal dining occasions, this knife supports your commitment to sustainability.',
        specifications: [
            { label: 'Material', value: 'Wood' },
            { label: 'Size', value: 'Standard' },
            { label: 'Color', value: 'Natural' },
            { label: 'Blade Type', value: 'Smooth' },
            { label: 'Price', value: '$6' },
        ],
    },
    {
        image: './imgs/change/3.png',
        topic: 'Cutlery Fork',
        introduction: 'Elevate your dining experience with our eco-friendly wooden fork. Designed with sustainability in mind, this fork is crafted from high-quality wood, offering a natural and stylish alternative to traditional cutlery. Its four prongs are expertly shaped to handle various types of food, from salads to main courses. The fork’s smooth finish and ergonomic design ensure comfort during use, making it a perfect choice for any meal. Ideal for both everyday dining and special occasions, this fork helps reduce plastic waste while adding a touch of sophistication to your table.',
        title: 'Cutlery Fork',
        description: 'This wooden cutlery fork is made from sustainable and responsibly sourced wood, providing an elegant and eco-conscious option for your dining needs. Its four prongs are perfectly designed to handle a variety of foods, from salads to main courses. The natural wood finish gives it a refined look while being kind to the environment. This fork is both sturdy and lightweight, making it an excellent choice for everyday use as well as special occasions. By choosing this wooden fork, you’re supporting a move towards more sustainable dining practices.',
        specifications: [
            { label: 'Material', value: 'Wood' },
            { label: 'Size', value: 'Standard' },
            { label: 'Color', value: 'Natural' },
            { label: 'Prongs', value: '4' },
            { label: 'Price', value: '$5' },
        ],
    },
    {
        image: './imgs/change/4.png',
        topic: 'Cutlery Spoon',
        introduction: 'Discover the perfect eco-friendly addition to your dining collection with our wooden cutlery spoon. Made from sustainable wood, this spoon offers a gentle touch while maintaining its durability. It is ideal for soups, stews, and other liquid-based dishes. The natural wood finish adds a touch of elegance to your table setting, while its design ensures comfort and ease of use. Suitable for both everyday meals and special occasions, this spoon supports your commitment to reducing plastic waste and promotes a more sustainable lifestyle.',
        title: 'Cutlery Spoon',
        description: 'Crafted from sustainable wood, this cutlery spoon is an excellent choice for eco-conscious dining. Its smooth surface and ergonomic design make it comfortable to use for soups, stews, and other liquid-based dishes. The spoon’s natural wood finish provides a touch of sophistication to your table setting, while its eco-friendly material supports your commitment to reducing plastic waste. This spoon is ideal for both home use and special events, offering a stylish yet practical alternative to conventional plastic spoons.',
        specifications: [
            { label: 'Material', value: 'Wood' },
            { label: 'Size', value: 'Standard' },
            { label: 'Color', value: 'Natural' },
            { label: 'Type', value: 'Soup Spoon' },
            { label: 'Price', value: '$4' },
        ],
    },
    {
        image: './imgs/change/5.png',
        topic: 'Paper Tray',
        introduction: 'Our biodegradable paper tray is designed to offer a sustainable solution for organizing and serving various items. The large size accommodates a substantial amount of food or goods, making it perfect for both personal and commercial use. Made from biodegradable paper, this tray is an environmentally responsible alternative to plastic or foam trays. Its sturdy construction ensures reliable performance, while its natural appearance complements any setting. Ideal for parties, events, or everyday use, this tray helps you reduce waste while maintaining functionality and style.',
        title: 'Paper Tray',
        description: 'This biodegradable paper tray is designed to be both practical and eco-friendly. Ideal for organizing and serving a variety of items, its large size accommodates a substantial amount of food or goods. Made from biodegradable paper, it offers a sustainable alternative to plastic trays, breaking down naturally without harming the environment. The tray’s durable construction ensures it holds up well under the weight of your items while providing a clean and efficient serving solution. Perfect for parties, events, or everyday use, this tray helps you make environmentally responsible choices.',
        specifications: [
            { label: 'Material', value: 'Biodegradable Paper' },
            { label: 'Size', value: 'Large' },
            { label: 'Color', value: 'Brown' },
            { label: 'Dimensions', value: '30x20 cm' },
            { label: 'Price', value: '$7' },
        ],
    },
    {
        image: './imgs/change/6.png',
        topic: 'Paper Cups',
        introduction: 'Enjoy beverages responsibly with our eco-friendly paper cups. Made from recycled paper, these cups provide a sustainable option for your drinking needs, whether you’re serving hot coffee or cold refreshments. Each cup is designed to be sturdy and leak-proof, ensuring your drinks stay contained while minimizing environmental impact. The cups are perfect for various occasions, from casual gatherings to formal events. With a pack of 50, you’ll have plenty of cups for any event, all while supporting a commitment to reducing plastic waste and protecting the environment.',
        title: 'Paper Cups',
        description: 'These eco-friendly paper cups are perfect for serving both hot and cold beverages. Made from recycled paper, they provide a sustainable option for your drinkware needs. Each cup is designed to be durable and functional, featuring a leak-proof lining that ensures your beverages stay contained. Whether you’re hosting a party, running an office, or just enjoying a casual gathering, these cups offer a practical solution while minimizing environmental impact. With a pack of 50 cups, you’ll have plenty on hand for any occasion.',
        specifications: [
            { label: 'Material', value: 'Recycled Paper' },
            { label: 'Size', value: '12 oz' },
            { label: 'Color', value: 'White' },
            { label: 'Pack Size', value: '50 cups' },
            { label: 'Price', value: '$10' },
        ],
    },
    {
        image: './imgs/change/7.png',
        topic: 'Paper Plate',
        introduction: 'Our biodegradable paper plates are the perfect choice for easy serving and cleanup. Designed with environmental responsibility in mind, these plates are made from biodegradable paper that breaks down naturally, reducing your ecological footprint. The 9-inch size is versatile enough for various types of meals, and the sturdy construction ensures the plates hold up well during use. Ideal for any occasion, from everyday meals to special events, these plates combine convenience with sustainability, helping you make eco-friendly choices without sacrificing quality or style.',
        title: 'Paper Plate',
        description: 'These biodegradable paper plates are designed to offer convenience and environmental responsibility. With a 9-inch size, they are suitable for a variety of meals and are made from biodegradable paper that breaks down naturally, reducing waste and minimizing environmental impact. The sturdy construction ensures they hold up well under the weight of your food, making them perfect for both casual and formal settings. Easy to use and dispose of, these plates support your commitment to sustainability while providing reliable performance.',
        specifications: [
            { label: 'Material', value: 'Biodegradable Paper' },
            { label: 'Size', value: '9 inches' },
            { label: 'Color', value: 'White' },
            { label: 'Pack Size', value: '30 plates' },
            { label: 'Price', value: '$8' },
        ],
    },
    {
        image: './imgs/change/8.png',
        topic: 'Facial Tissue Brown',
        introduction: 'Our brown facial tissues offer a soft and eco-friendly option for your daily needs. Made from recycled paper, these tissues provide a gentle touch while supporting environmental sustainability. The natural brown color adds a rustic charm to your tissue box, and the high absorbency ensures effective performance for various uses. Each pack contains 100 tissues, making it a practical choice for households or offices. By choosing these tissues, you are making a positive impact on the environment while enjoying the convenience and softness of recycled materials.',
        title: 'Facial Tissue Brown',
        description: 'These brown facial tissues are made from recycled paper, offering a blend of elegance and environmental responsibility. Their soft texture and high absorbency make them a practical choice for everyday use. The natural brown color adds a touch of rustic charm to any setting, whether at home or in the office. Packaged in a convenient set of 100, these tissues provide ample coverage while helping to reduce environmental impact by using recycled materials. Choosing these tissues supports both comfort and sustainability.',
        specifications: [
            { label: 'Material', value: 'Recycled Paper' },
            { label: 'Color', value: 'Brown' },
            { label: 'Pack Size', value: '100 tissues' },
            { label: 'Price', value: '$4' },
        ],
    },
    {
        image: './imgs/change/9.png',
        topic: 'Facial Tissue Green',
        introduction: 'Our green facial tissues are designed to offer both comfort and environmental responsibility. Crafted from recycled paper, these tissues are gentle on the skin while supporting sustainable practices. The fresh green color adds a touch of nature to your space, and the high-quality material ensures effective use for a variety of needs. Each pack contains 100 tissues, making it an ideal choice for homes or offices. By opting for these eco-friendly tissues, you’re choosing a product that prioritizes both personal comfort and environmental care.',
        title: 'Facial Tissue Green',
        description: 'These green facial tissues are crafted from recycled paper, providing a gentle and sustainable solution for your tissue needs. The fresh green color and soft texture make them suitable for everyday use, whether at home or in the office. With a pack of 100 tissues, you’ll have plenty on hand for various uses. These tissues are designed to be both effective and environmentally friendly, helping you reduce waste and support sustainable practices without compromising on quality or comfort.',
        specifications: [
            { label: 'Material', value: 'Recycled Paper' },
            { label: 'Color', value: 'Green' },
            { label: 'Pack Size', value: '100 tissues' },
            { label: 'Price', value: '$4' },
        ],
    }
    
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
