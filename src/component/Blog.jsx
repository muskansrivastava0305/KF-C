"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const BlogPage = () => {
  const [email, setEmail] = useState("")

  const featuredPosts = [
    {
      id: 1,
      title: "The Art of Crafting the Perfect Frenzo Bowl",
      excerpt: "Discover the secrets behind our refreshing and nutritious Frenzo Bowls...",
      image: "/blog12.jpg",
      category: "Food",
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "Music and Tacos: A Match Made in Heaven",
      excerpt: "Explore the unique combination of flavors and tunes at Music Taco Bell...",
      image: "/blog2.jpg",
      category: "Entertainment",
      date: "June 2, 2023",
    },
  ]

  const recentPosts = [
    {
      id: 3,
      title: "5 Quick and Healthy Lunch Ideas from Lunch Break Kart",
      excerpt: "Stay energized throughout your workday with these nutritious options...",
      image: "/blog3.jpg",
      category: "Nutrition",
      date: "June 10, 2023",
    },
    {
      id: 4,
      title: "Behind the Scenes: A Day in the Life of a Frenzo Bowl Artist",
      excerpt: "Meet the talented individuals who create our Instagram-worthy bowls...",
      image: "/blog4.jpg",
      category: "People",
      date: "June 8, 2023",
    },
    {
      id: 5,
      title: "The Evolution of Fast Food: From Greasy Spoons to Gourmet Quickbites",
      excerpt: "How our brands are revolutionizing the fast food industry...",
      image: "/blog5.jpg",
      category: "Industry",
      date: "June 5, 2023",
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log("Subscribed with email:", email)
    setEmail("")
    alert("Thanks for subscribing!")
  }

  return (
    <div className="font-sans text-gray-900 ">

      {/* Hero Section */}
      
      <section className=" h-[65vh] text-white py-20 bg-[url('/blogpage.jpg')] bg-cover bg-center flex items-center justify-center relative"> 
      <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="container mx-auto px-4 text-center z-10 ">
          <motion.h1
            className="text-5xl font-bold mb-4 "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Our Food Blog
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover delicious stories, recipes, and insights from our culinary world
          </motion.p>
          <motion.a
            href="#featured"
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Posts
          </motion.a>
        </div>
        
      </section>
      

      {/* Featured Posts Section */}
      <section id="featured" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {featuredPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <span className="text-sm font-semibold text-[#b71c22]">{post.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a href="#" className="text-[#b71c22] font-semibold hover:underline">
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section id="recent" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Recent Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-sm font-semibold text-[#b71c22]">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a href="#" className="text-[#b71c22] font-semibold hover:underline">
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section id="subscribe" className="py-20 bg-[#e50913] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for the latest food stories and exclusive recipes</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex text-white border border-gray-300 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email "
                className="flex-grow px-4 py-3 rounded-l-full text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-r-full font-bold hover:bg-pink-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default BlogPage

