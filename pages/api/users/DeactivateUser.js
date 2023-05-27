import connectMongo from "../../../utils/connectMongo";
import Users from "@/models/Users";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function DeactivateUser(req, res) {
  const { Id } = req.body;
  try {
    await connectMongo();
    const updatedUsers = await Users.updateOne(
      { Id: Id },
      {
        $set: { Active: false },
      }
    );
    res.json(updatedUsers);
  } catch (err) {
    res.json({ err });
  }
}
