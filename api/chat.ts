import { handleChatRequest } from "../lib/chatHandler.js";

export default async function handler(req: any, res: any) {
  return handleChatRequest(req, res);
}
