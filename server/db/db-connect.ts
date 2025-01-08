import { Collection, DataAPIClient } from "@datastax/astra-db-ts";
import dotenv from "dotenv";

dotenv.config();

export let collection: Collection;

const dbConnect = async () => {
  const client = new DataAPIClient(process.env.ASTRA_TOKEN);

  const db = client.db(process.env.ASTRA_URL, {
    keyspace: "default_keyspace",
    token: process.env.ASTRA_TOKEN,
  });

  collection = db.collection("post_data");

  console.log("Astra db is connected");
};

export default dbConnect;




// import { DataAPIClient } from "@datastax/astra-db-ts";
// import dotenv from "dotenv";

// dotenv.config();

// export let collection;

// const dbConnect = async () => {
//   const client = new DataAPIClient(process.env.ASTRA_TOKEN); // Astra token from the environment variables

//   const db = client.db(process.env.ASTRA_URL, {
//     keyspace: "your_keyspace_name", // Replace with your actual keyspace
//     token: process.env.ASTRA_TOKEN,
//   });

//   collection = db.collection("post_data");

//   console.log("Astra db is connected");
// };

// export default dbConnect;
