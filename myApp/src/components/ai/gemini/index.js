import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = "AIzaSyD5nmtycYxwry-fsDedeuHaDM1M0N8rOm4";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const GeminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default GeminiModel;
