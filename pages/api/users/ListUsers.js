import connectMongo from "../../../utils/connectMongo";
import Users from "@/models/Users";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function ListUsers(req, res) {
  try {
    await connectMongo();
    const savedUsers = await Users.find();
    res.json(savedUsers);
  } catch (err) {
    res.json({ err });
  }
}
