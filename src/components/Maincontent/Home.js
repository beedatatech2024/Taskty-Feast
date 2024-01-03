import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="m-2">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="w-full h-72"
            src="assets/istockphoto-1152001679-612x612.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  className="w-full h-72"
            src="assets/woman-chef-cooking-vegetables-pan_1303-22293.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  className="w-full h-72"
            src="assets/woman-cooking-vegetables-pan_1220-7256.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          OUR SPECIALS
        </h1>
        <div className="flex justify-center gap-8">
          <div className="bg-blue-400 rounded-md p-6 max-w-xs">
            <h1 className="text-xl font-bold text-white mb-4 text-center">
              All Food Items
            </h1>
            <img
              alt=" "
              className="w-52 h-48 mx-auto object-cover rounded-md mb-4 "
              src="assets/Search.jpg"
            />
            <p className="text-white text-justify">
              Explore a world of culinary delights, discover diverse
              ingredients, and access detailed nutritional information on our
              Search Food, Ingredients, and Nutrition website. Elevate your
              cooking with a wealth of resources to create wholesome and
              delicious meals. Welcome to a platform that caters to your
              culinary curiosity and well-being.
            </p>
          </div>
          <div className="bg-blue-400 rounded-md p-6 max-w-xs">
            <h1 className="text-xl font-bold text-white mb-4 text-center">
              Nutrition
            </h1>
            <img
              alt=" "
              className="w-52 h-48 mx-auto object-cover rounded-md mb-4 "
              src="assets/nut.jpg"
            />
            <p className="text-white text-justify">
              Explore a world of culinary delights, discover diverse
              ingredients, and access detailed nutritional information on our
              Search Food, Ingredients, and Nutrition website. Elevate your
              cooking with a wealth of resources to create wholesome and
              delicious meals. Welcome to a platform that caters to your
              culinary curiosity and well-being.
            </p>
          </div>
          <div className="bg-blue-400 rounded-md p-6 max-w-xs">
            <h1 className="text-xl font-bold text-white mb-4 text-center">
              Ingredients
            </h1>
            <img
              alt=" "
              className="w-52 h-48 mx-auto object-cover rounded-md mb-4 "
              src="assets/ing.png"
            />
            <p className="text-white text-justify">
              Explore a world of culinary delights, discover diverse
              ingredients, and access detailed nutritional information on our
              Search Food, Ingredients, and Nutrition website. Elevate your
              cooking with a wealth of resources to create wholesome and
              delicious meals. Welcome to a platform that caters to your
              culinary curiosity and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
