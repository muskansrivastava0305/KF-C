"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Send, Clock } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#f6f7f2]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh]  flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0  z-10" />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('contact.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="relative z-20 text-center">
            
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Reach Out to Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-200"
          >
            We're Here to Listen
          </motion.p>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Card 1 */}
            <motion.div whileHover={{ y: -5 }} className="p-6 bg-[#21201E] rounded-lg text-white text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-[#b71c22]" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+919315955893</p>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div whileHover={{ y: -5 }} className="p-6 bg-[#21201E] rounded-lg text-white text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-[#b71c22]" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>Info.kanvifoodscompany.com</p>
            </motion.div>

            {/* Contact Card 3 */}
            <motion.div whileHover={{ y: -5 }} className="p-6 bg-[#21201E] rounded-lg text-white text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-[#b71c22]" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>Greater Noida West, 201308</p>
            </motion.div>

            {/* Contact Card 4 */}
            <motion.div whileHover={{ y: -5 }} className="p-6 bg-[#21201E] rounded-lg text-white text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-[#b71c22]" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p>Mon-Sun: 9:00 AM - 10:00 PM</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="py-16 bg-[#f6f7f2]"
      >
        <div className="container mx-auto px-4 ">
          {/* <div className="max-w-4xl mx-auto bg-red-600"> */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white p-8 md:with- rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-black">Send Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#b71c22]"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#b71c22]"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#b71c22]"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#b71c22] transition-colors duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Have questions about our food or services? We're here to help! Reach out to us through any of our
                    channels and we'll get back to you as soon as possible.
                  </p>
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600">
                      Whether you're interested in catering services, have dietary concerns, or just want to share your
                      experience, we're always eager to hear from our valued customers.
                    </p>
                  </div>
                {/* </div> */}

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold text-black">Follow Us</h3>
                  <div className="flex gap-4 ">
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="#"
                      className="bg-black text-white p-3 rounded-full hover:bg-[#b71c22] transition-colors duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="#"
                      className="bg-black text-white p-3 rounded-full hover:bg-[#b71c22] transition-colors duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="#"
                      className="bg-black text-white p-3 rounded-full hover:bg-[#b71c22] transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactPage

