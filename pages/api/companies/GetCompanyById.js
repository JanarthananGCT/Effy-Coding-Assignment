import connectMongo from "../../../utils/connectMongo";
import Company from "@/models/Company";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function GetCompanyById(req, res) {
  const { Id } = req.body;
  try {
    await connectMongo();
    const savedCompanies = await Company.findOne({ Id: Id });
    res.json(savedCompanies);
  } catch (err) {
    res.json({ err });
  }
}
