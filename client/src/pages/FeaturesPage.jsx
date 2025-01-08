import React from "react";
import { motion } from "framer-motion";
import { Rocket, Settings, Lock, Phone, Cloud, Smile } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  {
    title: "Fast Performance",
    description: "Experience lightning-fast loading times with our optimized platform.",
    icon: <Rocket className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Customizable",
    description: "Tailor the platform to meet your specific needs and preferences.",
    icon: <Settings className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Secure",
    description: "State-of-the-art security measures to protect your data.",
    icon: <Lock className="w-12 h-12 text-red-500" />,
  },
  {
    title: "24/7 Support",
    description: "Our team is always available to assist you whenever you need.",
    icon: <Phone className="w-12 h-12 text-yellow-500" />,
  },
  {
    title: "Cloud Integration",
    description: "Seamless integration with your existing cloud services.",
    icon: <Cloud className="w-12 h-12 text-indigo-500" />,
  },
  {
    title: "User-Friendly",
    description: "Simple and intuitive design for a seamless experience.",
    icon: <Smile className="w-12 h-12 text-purple-500" />,
  },
];

const headerTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5 },
  }),
};

const FeaturesPage = () => {
  return (
    <>
    <div
      className="min-h-screen w-screen p-8 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom right, #eef2ff, #ffd1e6, #d8efff)",
      }}
    >
      <Header/>
      {/* Header Section */}
      <motion.header
        className="relative text-center mb-16"
        initial="hidden"
        animate="visible"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-xl blur-2xl opacity-30"></div>

        {/* Animated Icon */}
        <motion.div
          className="mb-4 inline-block bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-full shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Rocket className="w-16 h-16 text-white" />
        </motion.div>

        {/* Animated Heading */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            {"Our Features".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={headerTextVariants}
                custom={index}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-gray-700 mt-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Discover the benefits that set us apart from the rest.
        </motion.p>
      </motion.header>

      {/* Features Grid */}
      <motion.section
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl"
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-white bg-opacity-50 rounded-xl shadow-lg group transform-gpu transition-transform duration-300 hover:shadow-2xl hover:scale-105"
            custom={index}
            variants={headerTextVariants}
            whileHover={{ rotateX: -5, rotateY: 5 }}
            style={{
              background: "linear-gradient(to bottom right, #ffffff80, #d8e3ff90)",
            }}
          >
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 text-center mt-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-center mt-4">{feature.description}</p>
          </motion.div>
        ))}
      </motion.section>

    </div>
    <Footer/>

    </>

  );
};

export default FeaturesPage;
