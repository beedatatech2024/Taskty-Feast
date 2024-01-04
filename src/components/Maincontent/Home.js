import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <div className="border-spacing-2 m-2">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100 "
              src="assets\slide-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src="assets/slide-2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src="assets\slide-3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">OUR SPECIALS</h1>
        <div className="flex justify-center gap-36">
          <div className="bg-blue-400 rounded-md p-6 h-[] w-1/4">
            <h1 className="text-2xl font-bold text-black mb-4 text-center">
              All Food Items
            </h1>
            <img
              alt=" "
              className="w-72 h-48 mx-auto object-cover rounded-md mb-4 "
              src="assets/Search.jpg"
            />
            <p className="text-black text-justify font-semibold text-xl">
            Welcome to our culinary haven! At Tasty Feast, we're on a mission to make your kitchen adventures extraordinary. Explore diverse recipes, compile shopping lists seamlessly, and delve into detailed ingredient insights—all in one place.  and let your culinary journey begin!
            </p>
          </div>
          <div className="bg-blue-400 rounded-md p-6 h-[] w-1/4">
            <h1 className="font-bold text-black mb-4 text-center text-2xl">
              Nutrition
            </h1>
            <img
              alt=" "
              className="w-72 h-48 mx-auto object-cover rounded-md mb-4 "
              src="assets/nut.jpg"
            />
            <p className="text-black text-justify font-semibold text-xl">
            Unlock a healthier you with our Nutrition Search website. Explore detailed nutritional information for a variety of foods, make informed choices, and achieve your wellness goals effortlessly. Welcome to a world where good nutrition is just a click away!
            </p>
          </div>
          <div className="bg-blue-400 rounded-md p-6 h-[] w-1/4">
            <h1 className="text-2xl font-bold text-black mb-4 text-center">
              Ingredients
            </h1>
            <img
              alt=" "
              className="w-72 h-48 mx-auto object-cover rounded-md mb-4 "
              src="assets/ing.png"
            />
            <p className="text-black text-justify font-semibold text-xl">
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
      <h1 className="text-3xl font-bold text-center m-6">How It Works?</h1>
      <div className="d-flex flex-row" style={{ justifyContent: "center" }}>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <div style={{ width: "330px", borderRadius: "20px" }}>
            <img
              className="w-52 h-48 mx-auto object-cover rounded-md mb-4"
              src="assets\search-icon.png"
              alt=""
            />
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", margin: "10PX" }}
            >
              Search Items & Get your Favorit Food
            </h1>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <div style={{ width: "330px", borderRadius: "20px" }}>
            <img
              className="w-52 h-48 mx-auto object-cover rounded-md mb-4"
              src="assets\ing-icon.png"
              alt=""
            />
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", margin: "10PX" }}
            >
              {" "}
              Get your Favorit Food with Ingredients
            </h1>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <div style={{ width: "330px", borderRadius: "20px" }}>
            <img
              className="w-52 h-48 mx-auto object-cover rounded-md mb-4"
              src="assets/nutrition-icon.webp"
              alt=""
            />
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", margin: "10PX" }}
            >
              Get your Favorit Food with Nutrition
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-4">FROM OUR MENU</h1>
      <div className="d-flex flex-row m-4 justify-center">
        <div style={{ textAlign: "center" }} className="ml-10">
          <div style={{ width: "330px", borderRadius: "20px" }}>
            <img
              style={{
                borderRadius:"10px",
                margin: "5px",
                height: "170px",
                width: "260px",
              }}
              src="assets\breakfast.webp"
              alt=""
            />
            <h1
              style={{ fontSize: "30px", fontWeight: "bold", margin: "10PX" }}
            >
              Breakfast
            </h1>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "330px", borderRadius: "20px" }}>
            <img
              style={{
                borderRadius: "10px",
                margin: "5PX",
                height: "170px",
                width: "260px",
              }}
              src="assets\lunch.webp"
              alt=""
            />
            <h1
              style={{ fontSize: "30px", fontWeight: "bold", margin: "10PX" }}
            >
              Lunch
            </h1>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "330px", borderRadius: "20px" }}>
            <img
              style={{
                borderRadius: "10px",
                margin: "5PX",
                height: "170px",
                width: "260px",
              }}
              src="assets\lunch.webp"
              alt=""
            />
            <h1
              style={{ fontSize: "30px", fontWeight: "bold", margin: "10PX" }}
            >
              Dinner
            </h1>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "330px", borderRadius: "20px" }}>
            <img
              style={{
                borderRadius: "10px",
                margin: "5PX",
                height: "170px",
                width: "260px",
              }}
              src="assets\snacks.jpg"
              alt=""
            />
            <h1
              style={{ fontSize: "30px", fontWeight: "bold", margin: "10PX" }}
            >
              Snacks
            </h1>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">ABOUT US</h1>
      <div
        className="d-flex flex-row shadow-lg rounded-lg m-2 justify-center bg-blue-300"
        // style={{ backgroundColor: " #cc99ff", justifyContent: "center" }}
      >
        <div className="m-2 rounded-sm">
          <img
            style={{ height: "430px", margin: "20px" }}
            src="assets\aboutus.jpg"
            alt=""
          />
        </div>
        <div>
          <p
            style={{
              fontSize: "20px",
              width: "650px",
              textAlign: "justify",
              margin: "30px",
            }}
          >
            Welcome to our culinary haven! At Tasty Feast, we're on a mission to
            make your kitchen adventures extraordinary. Explore diverse recipes,
            compile shopping lists seamlessly, and delve into detailed
            ingredient insights—all in one place. and let your culinary journey
            begin!
            <br />
            Visit "Tasty Feast" to explore a comprehensive website that allows
            you to search for food items based on their nutrition and
            ingredients. This user-friendly platform provides detailed
            information about the nutritional content of various foods, helping
            you make informed dietary choices. Whether you're looking for
            calorie counts, macronutrient breakdowns, or specific ingredients,
            Tasty Feast is a valuable resource. The website's extensive database
            covers a wide range of food products, enabling you to plan balanced
            and healthy meals tailored to your nutritional needs. Stay proactive
            about your health by utilizing Tasty Feast for reliable and
            up-to-date information on the foods you consume.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
