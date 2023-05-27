import connectMongo from "../../../utils/connectMongo";
import Company from "@/models/Company";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateUsersToCompany(req, res) {
  const { Id, Users_Ids } = req.body;
  try {
    await connectMongo();
    const updatedUserIds = await Company.updateOne(
      { Id: Id },
      {
        $set: {
          Id: Id,
          Users_Ids: Users_Ids,
        },
      }
    );
    res.json(updatedUserIds);
  } catch (err) {
    res.json({ err });
  }
}
