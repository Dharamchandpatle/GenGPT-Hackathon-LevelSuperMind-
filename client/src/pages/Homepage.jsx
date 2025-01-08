import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Users, Globe, Activity } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100  flex flex-col w-screen">
      <Header />

      {/* Header Section */}
      <header className="w-full text-center py-10">
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI-Powered Social Media Insights
        </motion.h1>
        <motion.p
          className="text-xl text-gray-800 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Unlock actionable insights to grow your audience and make data-driven decisions.
        </motion.p>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 py-12">
        <FeatureCard
          icon={<BarChart2 className="h-12 w-12 text-blue-500" />}
          title="Analytics"
          description="Track and analyze your social media performance with precision."
        />
        <FeatureCard
          icon={<Users className="h-12 w-12 text-purple-500" />}
          title="Audience Insights"
          description="Understand your followers and their preferences like never before."
        />
        <FeatureCard
          icon={<Globe className="h-12 w-12 text-yellow-500" />}
          title="Global Trends"
          description="Stay updated with the latest trends across platforms and regions."
        />
        <FeatureCard
          icon={<Activity className="h-12 w-12 text-pink-500" />}
          title="Real-Time Insights"
          description="Get real-time updates and adapt to changes instantly."
        />
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 w-full">
        <motion.h2
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Take Your Social Media Strategy to the Next Level
        </motion.h2>
        <motion.p
          className="text-gray-800 mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Start gaining insights and growing your presence.
        </motion.p>

        {/* Get Started Button with Link */}

          <button
            className="w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg sm:mx-2 sm:w-auto hover:from-blue-600 hover:to-purple-600 hover:shadow-xl transition-all"
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/analyze")}
          >
            Get Started
          </button>
        
        
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md transform hover:scale-105 hover:shadow-2xl transition-all"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2 text-center text-blue-600">{title}</h3>
      <p className="text-gray-800 text-center">{description}</p>
    </motion.div>
  );
}

export default HomePage;
