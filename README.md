# Hack Code Team 

✨ Welcome to the **Pre-Hackathon Assignment: Social Media Performance Analysis** submission by **Hack Code**. Our dynamic team consists of:

- 👨‍💻 **Dharamchand Patle**  
- 👨‍💻 **Mayank Pradkar**  
- 👨‍💻 **Rahul Patil**  
- 👨‍💻 **Neelesh Kumar Jatav**

---

## 🔧 Assignment Overview

**🎡 Objective**  
To develop a basic analytics module leveraging **Langflow** and **DataStax Astra DB** for analyzing engagement data from mock social media accounts.

**⏳ Submission Deadline:** January 8th  

### 🛠️ Tools and Technologies Used:
- **📀 DataStax Astra DB** for scalable database operations.
- **🔄 Langflow** for workflow creation and GPT integration.

---

## 📈 Task Breakdown

### 1. 🔍 Fetch Engagement Data
- Simulated dataset includes metrics like:
  - ❤️ Likes
  - 💪 Shares
  - 💬 Comments
  - Post types (e.g., 🎢 carousel, 🎥 reels, 🖼️ static images).
- Data is stored in **DataStax Astra DB**.

### 2. 🔄 Analyze Post Performance
- A Langflow workflow was created to:
  - 💡 Accept input for post types.
  - 🔎 Query the dataset in **Astra DB**.
  - 📈 Calculate average engagement metrics for each post type.

### 3. 🕵️ Provide Insights
- Integrated **GPT** within Langflow to deliver actionable insights such as:
  - "🎢 Carousel posts have 20% higher engagement than static posts."
  - "🎥 Reels generate 2x more comments compared to other formats."

---

## 🔢 How It Works

### 🔀 LangFlow Workflow Steps:
1. **🔀 Take Input:** Accepts post type as input.
2. **🔍 Retrieve Data:** Queries the Astra DB for engagement metrics.
3. **🔑 Extract User ID:** Extracts user-specific data from the input.
4. **🔏 Filter Data:** Filters data based on User ID.
5. **🔢 Calculate Averages:** Computes engagement averages for different post types.
6. **🧲 Input to Model:** Passes data into the model.
7. **📈 Retrieve Output:** Generates insights using GPT.

### 📊 Data Storage with Astra DB
- **Schema Design:**
  - 👤 `user_id`: Unique identifier for the user.
  - 🔖 `post_type`: Type of post (reel, carousel, static image).
  - ❤️ `likes`, 💬 `comments`, 💪 `shares`: Engagement metrics.

---

## 🔄 Features

- **⏳ Real-Time Data Analysis:** Analyze social media metrics on the fly.
- **🔄 Customizable Insights:** Tailored insights generated using GPT.
- **📊 Scalable Storage:** Efficient data management with Astra DB.
- **🌐 Workflow Automation:** Seamless data orchestration with LangFlow.

---

## 🎧 How to Run Locally

### ⚡ Prerequisites
- **Node.js** installed.
- Access to **DataStax Astra DB**.

### 🔄 Steps

1. **🔍 Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/hack-code.git
   cd hack-code
   ```

2. **🔧 Install dependencies:**
   ```bash
   cd client/
   npm install
   cd ../server/
   npm install
   ```

3. **🔒 Set up environment variables:**
   ```bash
   LANGFLOW_APPLICATION_TOKEN=<your_token>
   PORT=5000
   ASTRA_TOKEN=<your_astra_token>
   ASTRA_URL=<your_astra_url>
   ```

4. **🌐 Start the application:**
   ```bash
   cd client/
   npm run dev
   cd ../server/
   npx tsc
   node dist/index.js
   ```

---

## 🚀 Deploy Link

Access the live application here: [**Hack Code Analytics Module**](#)

---

## 📚 Submission Requirements

1. **🔗 Project Submission:**
   - Upload your project to [FindCoder](https://www.findcoder.io/).
   - Link it to the **Level Supermind Hackathon**.

2. **🎥 Demo Video:**
   - Record a video covering:
     - Langflow workflow
     - Use of DataStax for data storage and querying
     - Insights generated using GPT
   - Submit the video link (YouTube, public access).

3. **🔐 Repository Link:**
   - Submit the public GitHub repository link or Google Drive ZIP file containing the code.

---

## 🎮 Judges
- **Hitesh Choudhary**
- **Sakham Choudhary**
- **Ranveer Allahbadia**
- **Harshill Karia**
- **Ayush Anand**

---

## 📊 Tech Stack

- **Frontend:** 🔧 React, Tailwind CSS  
- **Backend:** 🔧 Express, TypeScript  
- **Database:** 📀 Astra DB  
- **Workflow Automation:** 🔄 Langflow

---

## 💪 Follow Us

Stay connected for updates and insights:
- **🔖 Twitter:** [@Hiteshdotcom](https://twitter.com/Hiteshdotcom)

Let’s hack the future! 🚀

