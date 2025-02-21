"use client"

import { motion } from "framer-motion"
// import Image from "next/image"
import { useState, useEffect } from "react"
import { Utensils, Truck, Clock, Users } from "lucide-react"
//import Navbar from "./component/Navbar"

export default function FoodLandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
  // Hero Section Images
  // const images = [
  //   "1.jpg",
  //   "2.jpg",
  //   "3.jpg",
  //   "4.jpg",
  //   "5.png",
  // ];

  const slides = [
    {
      image: "taco.jpg",
      title: "Gourmet Kitchen",
      description: "Experience the finest culinary creations delivered straight to your doorstep",
    },
    {
      image: "kartt.jpg",
      title: "Fresh Ingredients",
      description: "We source only the freshest, highest quality ingredients for our dishes",
    },
    {
      image: "lunch.jpg",
      title: "Chef's Special",
      description: "Discover unique dishes crafted by our expert chefs",
    },
    {
      image: "bowl.jpg",
      title: "Quick Delivery",
      description: "Hot and fresh meals delivered within minutes",
    },
  ]

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
      image:  "frenzo.jpg",
      color: "from-green-500 to-emerald-700",
    },
    {
      name: "Music Taco Bell",
      description: "Authentic Mexican flavors with a musical twist",
      image:  "music.jpg",
      color: "from-red-500 to-orange-700",
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
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentImage((prev) => (prev + 1) % images.length)
  //   }, 4000)
  //   return () => clearInterval(timer)
  // }, [])
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isHovered])


  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
      <div className="relative min-h-screen w-full  text-white overflow-hidden flex items-center justify-center gap-5 bg-[#f6f7f2] bg-cover">
        {/* <Navbar />   */}
      <div
        className="container mx-auto"
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative pl-9 flex flex-col md:flex-row mt-12 items-center justify-between w-full h-[500px]">
          {/* Content Section */}

          <div className="relative z-10 container mx-auto h-full flex flex-col w-full md:w-1/2 text-white justify-center items-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2 md:space-y-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#b71c22] mb-8">Savor Every Bite – Crafted for <span className=" text-[#e50913]"> Food Lovers </span></h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[#21201e]">
            Delicious flavors, fresh ingredients, and an experience you’ll never forget. Discover our signature brands now
            </p>
            <div className="flex  gap-4 pt-4 md:pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#21201e] text-gray-100 px-8 py-3 rounded-full font-semibold text-lg"
              >
                Explore Our Brands
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-black md:px-8 md:py-3 px-4 py-1 rounded-full font-semibold md:text-lg text-black"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        </div> 
        

          {/* Image Section */}
          <div className="relative w-full md:w-1/2  h-[400px] md:h-[500px] flex items-center justify-center">
            {slides.map((slide, index) => (
              <div
                key={index} 
                className={`absolute w-[500px] h-[200px] md:w-[350px] md:h-[350px] bg-red-300 rounded-full 
                    transition-all duration-800 ease-in-out flex items-center  ${
                  currentSlide === index
                    ? "opacity-100 translate-x-0 rotate-0 scale-100"
                    : "opacity-0 translate-x-20 rotate-90 scale-75"
                }`}
              >
                <div className="relative md:w-[500px] md:h-[500px] w-[300px] h-[500px] flex items-center justify-center bg-cover rounded-full ">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-full w-[350px] h-[350px] flex items-center shadow-2xl"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-125" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
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
        {/* <div className="w-full md:w-1/2 space-y-6 z-10">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 absolute ${
                  currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl text-gray-300">{slide.description}</p>
              </div>
            ))}
          </div> */}
        {/* Background Images */}
        {/* <div className="absolute inset-0 z-0">
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
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        {/* <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Kan-Vi Foods & Company</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
              Delivering delicious, customizable meals through our digital-first cloud kitchen network
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg"
              >
                Explore Our Brands
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-8 py-3 rounded-full font-semibold text-lg"
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        </div>  */}

        {/* Scroll Indicator */}
       

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
          className="group relative overflow-hidden rounded-2xl"
        >
          {/* Hover Blur Effect */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity" />

          {/* Image Section */}
          <div className="relative aspect-[4/2]">
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
          <div className="absolute inset-0 flex flex-col justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity items-center mt-12">
            {/* <h3 className="text-2xl font-bold mb-2">{brand.name}</h3> */}
            <p className="text-gray-100">{brand.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-full font-semibold inline-block w-fit hover:bg-gray-900 hover:text-white cursor-pointer"
            >
              View Menu
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

