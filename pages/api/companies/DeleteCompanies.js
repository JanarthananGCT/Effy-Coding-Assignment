import connectMongo from "../../../utils/connectMongo";
import Company from "@/models/Company";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function DeleteCompanies(req, res) {
  const { Id } = req.body;
  try {
    await connectMongo();
    const deletedCompanies = await Company.findOneAndDelete({ Id: Id });
    res.json(deletedCompanies);
  } catch (err) {
    res.json({ err });
  }
}
