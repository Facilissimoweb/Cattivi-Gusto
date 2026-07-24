import { handleChatRequest } from "../../lib/chatHandler.js";

export default async function handler(req: any, res: any) {
  req.method = 'GET';
  return handleChatRequest(req, res);
}
