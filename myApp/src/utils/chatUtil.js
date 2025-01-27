import GeminiModel from "../ai/gemini";
import { getStartOfDayTime } from "./timeFormatters";

const createMsg = ({ msg, isBot = false, userName = "Me" }) => {
  const currTime = new Date().getTime();
  const newMsg = {
    userName,
    isBot,
    time: currTime,
    text: msg,
    id: parseInt(Math.random() * 10000),
    date: getStartOfDayTime(currTime),
  };
  return newMsg;
};

const generateAIMsg = async (prompt) => {
  const result = await GeminiModel.generateContent(prompt);
  const msg = result.response.text();
  return msg;
};

export { createMsg, generateAIMsg };
