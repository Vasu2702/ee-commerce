import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from './Product'; // Assuming Product.js is in the same directory
import Searches from './Searches.js';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon

function App() {
  const products = [
    { id: 1, name: 'Sangria', img: require('./image2.jpg'), description: 'Embroided Net Sarees', price: 1299 },
    { id: 2, name: 'Sangria', img: require('./image3.avif'), description: 'Embroided Net Sarees', price: 1299 },
    { id: 3, name: 'Sangria', img: require('./image4.avif'), description: 'Embroided Net Sarees', price: 1299 },
    { id: 4, name: 'Sangria', img: require('./image1.avif'), description: 'Embroided Net Sarees', price: 1299 },
    { id: 5, name: 'Sangria', img: require('./image5.avif'), description: 'Embroided Net Sarees', price: 1299 },
    // ... more product data
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // Display one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    centerMode: true, // Enable center mode
    centerPadding: '5%', // Adjust padding for partially visible previous and next slides
    beforeChange: (current, next) => { // Disable center mode for the first slide
      if (next === 0) {
        settings.centerMode = false;
      } else {
        settings.centerMode = true;
      }
    }
  };

  return (
    <div className="page-container">
    <div className="similar-products">
      <div className="heading-container">
        <h1>Similar Products</h1>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Slider>
      <div className="search-bar-container"> {/* Container for search bar and icon */}
        <input type="text" id="search" placeholder="Ask Cartesian" className="search-bar" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" /> {/* Search icon */}
      </div>
      <h3 id="rs">Recent Searches</h3>
      <Searches />
    </div>
    </div>
  );
}

export default App;
