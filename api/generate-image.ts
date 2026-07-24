import { handleImageGeneration } from "../lib/imageHandler.js";

export default async function handler(req: any, res: any) {
  return handleImageGeneration(req, res);
}
