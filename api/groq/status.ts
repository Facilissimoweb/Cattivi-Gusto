import { handleChatRequest } from "../../lib/chatHandler";

export default async function handler(req: any, res: any) {
  // Pass to handler with GET method simulation if needed or direct response
  req.method = 'GET';
  return handleChatRequest(req, res);
}
