import { motion } from "framer-motion";
import React from "react";

const AboutPage = () => {
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
              <h2 className="text-3xl font-bold text-red-800 mb-6">The Story Behind "Can We?"</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Born from a simple question - "Can We make a difference in the food industry?" 
                Our journey began with a vision to revolutionize how people experience food. 
                The name "Can We?" embodies our spirit of possibility and innovation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We started as a small team with big dreams, inspired by the success stories 
                of companies like Rebel Foods, who showed us that disruption in the food 
                industry is not just possible, but necessary.
              </p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/3.jpg"
                alt="Our Beginning"
                className="w-full h-full object-cover"
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
              className="rounded-lg overflow-hidden shadow-xl md:order-2"
            >
              <img
                src="/1.jpg"
                alt="Our Journey"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="md:order-2">
              <h2 className="text-3xl font-bold text-red-800 mb-6">Kan-Vi Foods' Journey</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our journey has been marked by continuous innovation and unwavering 
                commitment to quality. We've grown from a local favorite to a 
                recognized name in the food industry, all while staying true to our values.
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
              <h3 className="text-2xl font-bold text-red-800 mb-4">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                We've served over 100,000 happy customers and counting. Our commitment 
                to quality and innovation has made us a trusted name in the food industry.
              </p>
            </div>
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Future Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We're constantly exploring new ways to innovate and improve, 
                inspired by industry leaders like Rebel Foods, while staying true 
                to our core values and mission.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default AboutPage;