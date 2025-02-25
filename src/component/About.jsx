import { motion } from "framer-motion";
import React from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const AboutPage = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Customer",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Kan-Vi has completely transformed my dining experience! The variety of dishes and the ability to customize meals according to my dietary preferences is fantastic. The delivery is always on time, and the food arrives hot and fresh.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Food Enthusiast",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "As someone who loves exploring different cuisines, Kan-Vi is a dream come true. The quality of ingredients and attention to detail in every dish is remarkable. Their customer service is equally impressive!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Business Professional",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "The convenience and reliability of Kan-Vi's service make it my go-to choice for both personal and office meals. The affordable pricing and consistent quality keep me coming back.",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Health Enthusiast",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      text: "I appreciate how Kan-Vi caters to different dietary requirements. Their healthy options are both nutritious and delicious. The portion sizes are perfect, and the value for money is exceptional.",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Family Customer",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Feeding a family of five can be challenging, but Kan-Vi makes it easy and affordable. The kids love the food, and I love the convenience. The family meal deals are a great value!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideCount = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    let intervalId;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };
  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-red-800/40 z-10"></div>
        <img
          src="2.jpg"
          alt="Food Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Crafting Culinary Excellence Since 2020
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                The Story Behind "Kan-Vi?"
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Born from a simple question - "Can Kan-vi make a difference in
                the food industry?" Our journey began with a vision to
                revolutionize how people experience food. The name "Kan-vi"
                embodies our spirit of possibility and innovation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We started as a small team with big dreams, inspired by the
                success stories of companies like Rebel Foods, who showed us
                that disruption in the food industry is not just possible, but
                necessary.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/s.jpg"
                alt="Our Beginning"
                className="w-[600px] h-[350px] object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-xl md:order-2 order-2"
            >
              <img
                src="/j.jpg"
                alt="Our Journey"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="md:order-2 ">
              <h2 className="text-3xl font-bold text-red-800 mb-6">
                Kan-Vi Foods' Journey
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our journey has been marked by continuous innovation and
                unwavering commitment to quality. We've grown from a local
                favorite to a recognized name in the food industry, all while
                staying true to our values.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Quality Excellence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Customer First
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Innovation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-800 rounded-full mr-3"></span>
                  Sustainability
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Additional Related Sections */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Our Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We've served over 100,000 happy customers and counting. Our
                commitment to quality and innovation has made us a trusted name
                in the food industry.
              </p>
            </div>
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Future Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're constantly exploring new ways to innovate and improve,
                inspired by industry leaders like Rebel Foods, while staying
                true to our core values and mission.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Customers Say
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers about their experience with Kan-Vi
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div
            className="relative max-w-6xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Testimonial */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl p-6">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 p-8 md:p-12"
                  >
                    <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                      <div className="text-center md:text-left">
                        <div className="relative w-32 h-32 mx-auto md:mx-0">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-red-500 rounded-full p-2">
                            <Quote className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="font-bold text-xl">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <div className="flex items-center justify-center md:justify-start mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-red-800 fill-current"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <Quote className="absolute -left-2 -top-2 w-8 h-8 text-orange-200" />
                        <p className="text-gray-600 text-lg leading-relaxed pl-6">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-red-800 w-8"
                      : "bg-orange-200 hover:bg-orange-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-orange-500 mb-2">15k+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-orange-500 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div> */}

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Our Service?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who choose Kan-Vi for their
              daily meals.
            </p>
            <button className="bg-red-800 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
