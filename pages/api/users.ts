import { UserService } from "@/backend/user/user.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const userService = new UserService();
    const users = await userService.getUsers();
    return res.json(users)
}