import { Auth } from "@auth/core";
import { authOptions } from "./auth.config";

export const handleAuth = async (req: any, res: any) => {
  return await Auth(req, authOptions);
};
