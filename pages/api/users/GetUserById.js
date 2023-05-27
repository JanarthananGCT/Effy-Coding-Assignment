import connectMongo from "../../../utils/connectMongo";
import Users from "@/models/Users";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function GetUserById(req, res) {
  const { Id } = req.body;
  try {
    await connectMongo();
    const savedUsers = await Users.findOne({ Id: Id });
    res.json(savedUsers);
  } catch (err) {
    res.json({ err });
  }
}
