import { HfInference } from "@huggingface/inference";
import { NextApiRequest, NextApiResponse } from "next";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe
  they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your
  recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra
  ingredients. Do not greet like an AI, and format your response in markdown to make it  easier to render to a web page.
  Make sure to separate the ingredients section from the instructions, as well as the serving size.`

const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGING_FACE_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { ingredients } = req.body;
    const ingredientsString = ingredients.join(", ");

    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe!` },
      ],
      max_tokens: 1024,
    });

    res.status(200).json({ recipe: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
