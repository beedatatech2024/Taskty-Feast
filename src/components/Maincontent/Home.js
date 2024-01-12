import React,{useEffect,useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import Chat from "./Chat";
const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatbot(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
  <div className="rounded-lg overflow-hidden">
  <Carousel data-bs-theme="none">
    <Carousel.Item>
      <img
        className="h-96 w-full p-3 object-cover shadow-sky-400 rounded-lg opacity-100"
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).webp"
        alt="First slide"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="h-96 w-full object-cover p-3 shadow-2xl rounded-lg opacity-70"
        src="assets\slide-2.jpg"
        alt="Second slide"
      />
      <Carousel.Caption></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="h-96 w-full p-3 object-cover shadow-2xl rounded-lg opacity-80"
        src="assets\slide-3.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
</div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Specials</h1>
        <div className="flex justify-center gap-36">
          <div className="bg-blue-400 rounded-md p-6 pt-2 w-1/4">
            <h1 className="text-xl font-bold text-black p-2 text-center">
              All Food Items
            </h1>
            <img
              alt=" "
              className="w-80 h-48 mx-auto object-cover rounded-md mb-4"
              src="assets/Search.jpg"
            />
            <p className="text-justify text-black font-serif">
            Welcome to Tasty Feast, your ultimate culinary have Embark on extraordinary kitchen adventures as we guide you through a world of diverse recipes, seamlessly compile shopping lists, and provide in-depth ingredient insights—all conveniently in one place. Get ready to elevate your culinary journey with us, where flavors meet innovation, and every dish tells a unique story. Let the exploration of tastes and textures begin—your kitchen's next masterpiece awaits!
            </p>
          </div>
          <div className="bg-blue-400 rounded-md p-6 pt-2 w-1/4">
            <h1 className="text-xl font-bold text-black p-2 text-center">
              Nutrition
            </h1>
            <img
              alt=" "
              className="w-80 h-48 mx-auto object-cover rounded-md mb-4"
              src="assets/nut.jpg"
            />
            <p className="text-justify font-serif">
            Welcome to our Nutrition Search website, your gateway to unlocking a healthier you! Dive into detailed nutritional information for a wide range of foods, empowering you to make informed and mindful choices that align with your wellness goals. Experience the ease of navigating through a world where good nutrition is at your fingertips. Explore, discover, and embark on a journey towards a better, healthier you. Let's pave the way for your well-being—one click at a time!"
            </p>
          </div>
          <div className="bg-blue-400 rounded-md p-6 pt-2 w-1/4">
            <h1 className="text-xl font-bold text-black p-2 text-center">
              Ingredients
            </h1>
            <img
              alt=" "
              className="w-80 h-48 mx-auto object-cover rounded-md mb-4"
              src="assets/ing.png"
            />
            <p className="text-black text-justify font-serif">
            Explore a world of culinary delights, discover diverse ingredients, and access detailed nutritional information on our Search Food, Ingredients, and Nutrition website. Elevate your cooking with a wealth of resources to create wholesome and delicious meals. Welcome to a platform that caters to your culinary curiosity and well-being, providing you with the tools and knowledge to embark on a delightful culinary journey.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center m-6">How It Works?</h1>
      <div className="d-flex flex-row" style={{ justifyContent: "center" }}>
        <div>
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
      <h1 className="text-3xl font-bold text-center mt-4">From our menu</h1>
      <div className="flex gap-16 px-10 justify-center items-center mt-4">
          <div>
            <img src="assets\breakfast.webp" alt="" className="h-60 w-72 rounded-lg shadow-lg object-cover"/>
            <h1 className="text-center text-xl font-semibold">
              Breakfast
            </h1>
        </div>
        <div>
            <img src="assets\lunch.webp" alt="" className="h-60 w-72 rounded-lg shadow-lg object-cover"/>
            <h1 className="text-center text-xl font-semibold">
              Lunch
            </h1>
        </div><div>
            <img src="assets\dinner.jpg" alt="" className="h-60 w-72 rounded-lg shadow-lg object-cover"/>
            <h1 className="text-center text-xl font-semibold">
              Dinner
            </h1>
        </div><div>
            <img src="assets\snacks.jpg" alt="" className="h-60 w-72 rounded-lg shadow-lg object-cover"/>
            <h1 className="text-center text-xl font-semibold">
              Snacks
            </h1>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div
        className="d-flex flex-row shadow-lg rounded-lg m-2 justify-center bg-blue-300"
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
     
        {showChatbot && (
        <div>
          <Chat/>
        </div>
      )}
      </div>
    </>
  );
};
export default Home;
