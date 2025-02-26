"use client"

import { motion } from "framer-motion"
// import Image from "next/image"
import { useState, useEffect } from "react"
import { Utensils, Truck, Clock, Users } from "lucide-react"
import { Link } from "react-router-dom"
//import Navbar from "./component/Navbar"

export default function FoodLandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentImage, setCurrentImage] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null);
  // Hero Section Images
  const images = [
    "h1.jpg",
    "taco1.jpg",
    "on.jpg",
    "d1.jpg",
    "online1.jpg",
  ];

  // const slides = [
  //   {
  //     image: "taco.jpg",
  //     title: "Gourmet Kitchen",
  //     description: "Experience the finest culinary creations delivered straight to your doorstep",
  //   },
  //   {
  //     image: "kartt.jpg",
  //     title: "Fresh Ingredients",
  //     description: "We source only the freshest, highest quality ingredients for our dishes",
  //   },
  //   {
  //     image: "lunch.jpg",
  //     title: "Chef's Special",
  //     description: "Discover unique dishes crafted by our expert chefs",
  //   },
  //   {
  //     image: "bowl.jpg",
  //     title: "Quick Delivery",
  //     description: "Hot and fresh meals delivered within minutes",
  //   },
  // ]

  // Intro Section Features
  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Multiple Food Brands",
      description: "Choose from our diverse range of food brands, each with its unique cuisine and flavors.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Quick Delivery",
      description: "Fast and reliable delivery service to get your food while it's hot and fresh.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Efficient Operations",
      description: "Cloud kitchen model ensures quick preparation and cost-effective operations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer-Centric",
      description: "Customizable meals and excellent customer service for complete satisfaction.",
    },
  ]

  // Brand Showcase Data
  const brands = [
    {
      name: "Franzoo Bowl",
      description: "Fresh and healthy bowls packed with flavors",
      image:  "F1.jpg",
      color: "from-green-500 to-emerald-700",
    },
    {
      name: "Music Taco Bell",
      description: "Authentic Mexican flavors with a musical twist",
      image:  "tac.jpg",
      color: "from-red-500 to-orange-700",
    },
    {
      name: "Lunch Break Kart",
      description: "Quick and delicious lunch options for busy professionals",
      image:  "lunch1.jpg",
      color: "from-blue-500 to-indigo-700",
    },
    {
        name: "Lunch Break Kart",
        description: "Quick and delicious lunch options for busy professionals",
        image:  "/lunch1.jpg",
        color: "from-blue-500 to-indigo-700",
      },
      {
        name: "Lunch Break Kart",
        description: "Quick and delicious lunch options for busy professionals",
        image:  "kart.jpg",
        color: "from-blue-500 to-indigo-700",
      },
      {
        name: "Lunch Break Kart",
        description: "Quick and delicious lunch options for busy professionals",
        image:  "kart.jpg",
        color: "from-blue-500 to-indigo-700",
      },
  ]

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])
  // useEffect(() => {
  //   if (!isHovered) {
  //     const timer = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length)
  //     }, 5000)
  //     return () => clearInterval(timer)
  //   }
  // }, [isHovered])

const handleTouch = (index) => {
  setHoveredIndex(hoveredIndex === index ? null : index);
};

useEffect(() => {
  const handleClickOutside = (event) => {
    // Check if the click was outside the card
    if (!event.target.closest(".brand-card")) {
      setHoveredIndex(null);
    }
  };

  // Attach event listener
  document.addEventListener("click", handleClickOutside);
  return () => {
    // Cleanup event listener on component unmount
    document.removeEventListener("click", handleClickOutside);
  };
}, []);



  return (
    <main className=" bg-gradient-to-b from-gray-500 to-white min-h-screen "> 
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden md:mt-12 mt-20">
  <div className="relative w-full min-h-screen md:h-[600px] text-white flex items-center justify-center gap-5 bg-[#f6f7f2] bg-cover">
    <div className="container mx-auto">
      <div className="relative md:pl-9 px-4 flex flex-col md:flex-row items-center justify-between w-full gap-8"> */}
        {/* Content Section */}
        {/* <div className="relative z-10 container mx-auto h-full flex flex-col w-full md:w-1/2 text-white justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#b71c22] mb-4 md:mb-8">
              Savor Every Bite – Crafted for <span className="text-[#e50913]">Food Lovers</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl max-w-3xl mx-auto text-[#21201e]">
              Delicious flavors, fresh ingredients, and an experience you’ll never forget. Discover our signature brands now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-8 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#21201e] text-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg"
              >
                <Link to="/brand">Explore Our Brands</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-black px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg text-black"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        </div>  */}

        {/* Image Section */}
        {/* <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-[300px] md:min-h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-[280px] h-[280px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] rounded-full md:mt-0 mt-12
                  transition-all duration-800 ease-in-out flex items-center justify-center ${
                currentSlide === index
                  ? "opacity-100 translate-x-0 rotate-0 scale-100"
                  : "opacity-0 translate-x-20 rotate-90 scale-75"
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center bg-cover rounded-full">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="object-cover rounded-full w-full h-full shadow-2xl"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div> */}

  {/* Scroll Indicator */}
  {/* <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
  >
    <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-2 bg-white rounded-full mt-2" />
    </div>
  </motion.div>
</section> */}




<section className="relative h-screen overflow-hidden px-4">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentImage === index ? 0.7 : 0,
                scale: currentImage === index ? 1 : 1.1,
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={img || "/placeholder.svg"}
                alt={`Food image ${index + 1}`}
                fill
                className="object-cover md:object-top w-full h-full "
                priority={index === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center text-white md:w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Savor Every Bite – Crafted for <span className="text-[#e50913]">Food Lovers</span></h1>
            <p className="text-xl md:text-lg max-w-3xl mx-auto text-gray-200">
              Delivering delicious, customizable meals through our digital-first cloud kitchen network
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#b71c22] text-white hover:bg-gray-200 hover:text-[#b71c22] cursor-pointer px-8 py-3 rounded-full font-semibold text-lg"
              >
                <Link to={'/brand'}>Explore Our Brands</Link>
                
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#b71c22] px-8 py-3 rounded-full font-semibold text-lg"
              >
               <Link to={'/brand'}>Order Now </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Cloud Kitchen Excellence</h2>
            <p className="text-lg text-gray-600">
              Our cloud kitchen model combines efficiency with quality, bringing you the best of multiple cuisines under
              one digital roof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-gray-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto mb-16 "
          >
            <h2 className="text-4xl font-bold mb-6 text-[#b71c22]">Our Food Brands</h2>
            <p className="text-lg text-gray-600">
              Discover our unique food brands, each crafted to deliver exceptional taste and quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {brands.map((brand, index) => (
       <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  whileHover={{ y: -10 }}
  className="group relative overflow-hidden rounded-2xl brand-card"
  onClick={() => handleTouch(index)} // Toggle hover on click
>
  {/* Hover Blur Effect */}
  <div
    className={`absolute inset-0 bg-black transition-opacity ${
      hoveredIndex === index ? "opacity-60" : "opacity-0"
    }`}
  />

  {/* Image Section */}
  <div className="relative aspect-[4/2] cursor-pointer">
    <img
      src={brand.image}
      alt={brand.name}
      className="object-cover w-full h-full transition-transform group-hover:blur-md"
    />
  </div>

  <div className="absolute top-0 left-0 w-full p-4 text-center bg-black/40 text-white text-2xl font-bold">
    {brand.name}
  </div>

  {/* Content Overlay */}
  <div
    className={`absolute inset-0 flex flex-col justify-center p-6 text-white transition-opacity items-center mt-12 ${
      hoveredIndex === index ? "opacity-100 backdrop-blur-sm" : "opacity-0"
    } group-hover:opacity-100`}
  >
    <p className="text-gray-100 mt-2">{brand.description}</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold inline-block w-fit hover:bg-gray-900 hover:text-white cursor-pointer"
    >
     <Link to={'/brand'} > View Menu </Link>
    </motion.button>
  </div>
</motion.div>

      
      
      ))}
    </div>
        </div>
      </section>
    </main>
  )
}

