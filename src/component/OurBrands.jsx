"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BrandPage = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const brands = [
    {
      name: "Frenzo Bowl",
      description:
        "Indulge in our refreshing and healthy Frenzo Bowls, packed with fresh fruits, superfoods, and delicious toppings. Perfect for a nutritious meal or a guilt-free dessert!",
      image: "/F1.jpg",
      swiggyLink: "https://www.swiggy.com/frenzo-bowl",
      zomatoLink: "https://www.zomato.com/frenzo-bowl",
    },
    {
      name: "Music Taco Bell",
      description:
        "Experience the perfect blend of music and Mexican-inspired cuisine at Music Taco Bell. Enjoy our signature tacos, burritos, and quesadillas while grooving to the latest hits!",
      image: "taco.jpg",
      swiggyLink: "https://www.swiggy.com/music-taco-bell",
      zomatoLink: "https://www.zomato.com/music-taco-bell",
    },
    {
      name: "Lunch Break Kart",
      description:
        "Make your lunch break exciting with our diverse menu at Lunch Break Kart. From quick bites to hearty meals, we've got your midday cravings covered!",
      image: "l2.jpg",
      swiggyLink: "https://www.swiggy.com/lunch-break-kart",
      zomatoLink: "https://www.zomato.com/lunch-break-kart",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        ...brands.map((brand) => brand.name.toLowerCase().replace(/\s+/g, "-")),
        "order",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans min-h-screen text-gray-900 ">
      {/* <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
             

      </header> */}
      <section
  id="hero"
  className=" flex items-center justify-center  text-white relative bg-[url('/b2.jpg')] bg-cover bg-center"
>

    <div className="absolute inset-0 bg-black/60 z-10"></div>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center h-[65vh] flex flex-col justify-center items-center relative z-10"
  >
    <h1 className="text-5xl font-bold mb-4 text-gray-100">
      Discover Our Amazing Brands
    </h1>
    <p className="text-xl mb-8 text-white">
      Experience the best flavors from our curated selection
    </p>
    <motion.div
      className="flex justify-center space-x-4 text-black"
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {brands.map((brand, index) => (
        <motion.img
          key={index}
          src={brand.image}
          alt={brand.name}
          className="w-24 h-24 rounded-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        />
      ))}
    </motion.div>
  </motion.div>
</section>

<div className=" font-bold text-2xl text-center p-4">Explore Our Brands</div>

      {brands.map((brand, index) => (
        <section
          key={brand.name}
          id={brand.name.toLowerCase().replace(/\s+/g, "-")}
          className={`py-20 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
        >
           
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center"
            >
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0 "
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                
                <img
                  src={brand.image || "/placeholder.svg"}
                  alt={brand.name}
                  className="rounded-lg shadow-lg w-[600px] h-[400px] object-cover"
                />
              </motion.div>
              <div className="md:w-1/2 md:pl-8 ">
                <h2 className="text-4xl font-bold mb-4">{brand.name}</h2>
                <p className="text-lg mb-6">{brand.description}</p>
                {/* <div className="flex space-x-4">
                  <a
                    href={brand.swiggyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    Order on Swiggy
                  </a>
                  <a
                    href={brand.zomatoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    Order on Zomato
                  </a>
                </div> */}
                <div className=" button rounded-4xl bg-red-800 hover:bg-black w-36 h-9 flex justify-center items-center text-white">
                <a
                href="#order"
                className={`font-bold hover:text-gray-100 transition-colors ${activeSection === "order" ? "text-blue-600" : ""}`}
              >
                Order Now
              </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section id="order" className="py-20 bg-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Order Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">{brand.name}</h3>
                <div className="space-y-4">
                  <a
                    href={brand.swiggyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    Order on Swiggy
                  </a>
                  <a
                    href={brand.zomatoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    Order on Zomato
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-center text-blue-600"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <span className="block mb-2">Scroll to explore</span>
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div> */}
    </div>
  );
};

export default BrandPage;
