import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function getChatResponse(prompt: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
}

export const emergencyPrompts = {
    earthquake: "What should I do during an earthquake?",
    flood: "How do I prepare for a flood?",
    fire: "What are the immediate steps during a fire emergency?",
    hurricane: "How should I prepare for an approaching hurricane?",
    firstAid: "What are the basic first aid steps for common injuries?",
};