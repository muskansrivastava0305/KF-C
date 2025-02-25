import { motion, useInView } from "framer-motion"
import {
  Award,
  ChefHat,
  Clock,
  DollarSign,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Star,
  Timer,
  Truck,
  UtensilsCrossed,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        setCount(Math.min(Math.floor((progress / duration) * end), end))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    if (isInView) {
      animationFrame = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

export default function WhyChooseUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <img
          src="/why.jpg"
          alt="Food background"
          fill
          className="object-cover brightness-50 h-[400px] w-full object-center"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white p-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Kan-Vi?</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Experience the perfect blend of taste, convenience, and value
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <a
                href="/menu"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black hover:bg-red-700 hover:text-white transition-colors"
              >
                Explore Our Menu
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Affordable Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center">
                <DollarSign className="text-orange-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold">Affordable & Customizable Meals</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Budget-Friendly Options</h3>
                    <p className="text-gray-600">
                      Enjoy quality meals starting from just $5.99. Our portions are generous, ensuring great value for
                      your money.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UtensilsCrossed className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Customize Your Meal</h3>
                    <p className="text-gray-600">
                      Personalize your dishes with our wide range of ingredients and dietary options at no extra cost.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Special Dietary Options</h3>
                    <p className="text-gray-600">
                      Vegetarian, vegan, gluten-free, and other dietary requirements catered for without premium
                      pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img src="/meals.jpg" alt="Affordable meals" fill className="object-cover h-[400px] " />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Variety Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="grid grid-cols-2 gap-4 lg:order-last order-1">
              <div className="space-y-4">
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <img
                    src="/quality.jpg"
                    alt="Food variety 1"
                    fill
                    className="object-cover h-[200px] w-[500px]"
                  />
                </div>
                <div className="relative h-[150px] rounded-xl overflow-hidden ">
                  <img
                    src="/b.jpg"
                    alt="Food variety 2"
                    fill
                    className="object-cover  h-[200px] w-[500px]"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-[150px] rounded-xl overflow-hidden">
                  <img
                    src="/season.jpg"
                    alt="Food variety 3"
                    fill
                    className="object-cover  h-[200px] w-[500px]"
                  />
                </div>
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <img
                    src="/choice.jpg"
                    alt="Food variety 4"
                    fill
                    className="object-cover h-[200px] w-[500px]"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                <ChefHat className="text-green-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold">Wide Variety of Food Choices</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Cuisines</h3>
                    <p className="text-gray-600">
                      Explore dishes from Asian, European, American, and Middle Eastern cuisines, all prepared by expert
                      chefs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Seasonal Specials</h3>
                    <p className="text-gray-600">
                      Enjoy rotating seasonal menus featuring fresh, locally-sourced ingredients and innovative recipes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
                    <p className="text-gray-600">
                      Every dish is prepared using premium ingredients and undergoes strict quality checks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="text-blue-600 w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Fast & Reliable Delivery Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our state-of-the-art delivery network ensures your food arrives fresh and on time, every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Timer className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
              <p className="text-gray-600">
                Track your order in real-time and get accurate ETAs through our mobile app.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">30-Minute Delivery</h3>
              <p className="text-gray-600">
                Most orders delivered within 30 minutes of preparation, guaranteed hot and fresh.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe Handling</h3>
              <p className="text-gray-600">
                Temperature-controlled packaging and strict safety protocols for every delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6 rounded-xl bg-orange-50">
              <h3 className="text-4xl font-bold text-red-700 mb-2">
                <Counter end={15000} />+
              </h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6 rounded-xl bg-green-50">
              <h3 className="text-4xl font-bold text-red-700 mb-2">
                <Counter end={200} />+
              </h3>
              <p className="text-gray-600">Menu Items</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50">
              <h3 className="text-4xl font-bold text-red-700 mb-2">
                <Counter end={30} />
              </h3>
              <p className="text-gray-600">Min Delivery Time</p>
            </div>
            <div className="p-6 rounded-xl bg-purple-50">
              <h3 className="text-4xl font-bold text-red-700 mb-2">
                <Counter end={50} />+
              </h3>
              <p className="text-gray-600">Delivery Partners</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our satisfied customers have to say
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[url('/p.jpg')] mr-4 bg-cover" />
                  <div>
                    <h4 className="font-semibold">Customer Name</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The food quality and delivery service are exceptional. I love the variety of options available and
                  how I can customize my meals."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Quality Commitment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of food quality and safety throughout our process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Safety Certified", desc: "All our kitchens are HACCP certified" },
              { icon: Leaf, title: "Fresh Ingredients", desc: "Daily sourced from local suppliers" },
              { icon: ChefHat, title: "Expert Chefs", desc: "Professionally trained culinary team" },
              { icon: Award, title: "Quality Checks", desc: "Regular quality audits and inspections" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-600 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Kan-Vi?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-orange-100">
              Join thousands of satisfied customers who choose Kan-Vi for their daily meals.
            </p>
            <a
              href="/#order"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white text-gray-900 px-8 text-sm font-medium hover:bg-orange-50 transition-colors"
            >
              Order Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

