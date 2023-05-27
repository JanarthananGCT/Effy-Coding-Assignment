import connectMongo from "../../../utils/connectMongo";
import Users from "@/models/Users";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function DeleteUser(req, res) {
  const { Id } = req.body;
  try {
    await connectMongo();
    const deletedUsers = await Users.findOneAndDelete({ Id: Id });
    res.json(deletedUsers);
  } catch (err) {
    res.json({ err });
  }
}
