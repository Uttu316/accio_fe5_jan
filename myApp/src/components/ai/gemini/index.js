import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log(GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const GeminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default GeminiModel;
