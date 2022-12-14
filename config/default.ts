import dotenv from "dotenv";
import assert from "assert";
dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  ENV,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

// Firebase Configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  database: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

export default {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  env: ENV,
  firebaseConfig,
};
