import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import {
  ChartNoAxesCombined,
  MessageCircleMore,
  Share2,
  ThumbsUp,
} from "lucide-react";
import EngagementOverviewChart from "../components/overview/EngagementOverviewChart";
import PostTypeChart from "../components/overview/PostTypeChart";
import EngagementChannelChart from "../components/overview/EngagementChannelChart";
import Footer from "../components/Footer";

const OverviewPage = () => {
  return (
    <div
      className="flex-1 overflow-auto relative z-10"
      style={{
        background: "linear-gradient(to bottom right, #eef2ff, #ffd1e6, #d8efff)",
      }}
    >
      {/* Header */}
      {/* <Header title="Overview" /> */}
      <Header/>



      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stat Cards Section */}

        <motion.div
          className="grid grid-cols-1 rounded-2xl bg-black bg-opacity-80 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Average Engagement"
            value="849"
            icon={ChartNoAxesCombined}
            color="#6366F1"
          />
          <StatCard
            name="Average Likes"
            value="500"
            icon={ThumbsUp}
            color="#8B5CF6"
          />
          <StatCard
            name="Average Shares"
            value="100"
            icon={Share2}
            color="#EC4899"
          />
          <StatCard
            name="Average Comments"
            value="249"
            icon={MessageCircleMore}
            color="#10B981"
          />
        </motion.div>

        {/* Charts Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-opacity-70 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "linear-gradient(to bottom right, #ffffff80, #d8e3ff90)",
          }}
        >
          <div className="p-6 bg-white shadow rounded-lg">
            <EngagementOverviewChart />
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <PostTypeChart />
          </div>
          <div className="lg:col-span-2 p-6 bg-white shadow rounded-lg">
            <EngagementChannelChart />
          </div>
        </motion.div>
      </main>
      <Footer/>

    </div>
  );
};

export default OverviewPage;
