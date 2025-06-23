// src/api/geminiApi.ts
import axios from "axios";

import { Base_Url } from "../constants/BaseUrl/Url";
const GEMINI_API_KEY = "AIzaSyCPJWHj2oyWWdV4iDa20_BgDNM5FfJ5QuM"; // Replace with your actual Gemini API key
const GEMINI_ENDPOINT = Base_Url;

export const analyzeCropImage = async (
  base64Image: string
): Promise<string> => {
  const payload = {
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg", // change to "image/png" if needed
              data: base64Image,
            },
          },
          {
            text: "Is this fruit or vegetable infected, rotten, or of bad quality? Give a clear and helpful diagnosis.",
          },
        ],
      },
    ],
  };

  try {
    const res = await axios.post(
      `${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return (
      res.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini."
    );
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Failed to analyze the image.";
  }
};
