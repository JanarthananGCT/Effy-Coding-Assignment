import connectMongo from "../../../utils/connectMongo";
import Company from "@/models/Company";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function ListCompanies(req, res) {
  try {
    await connectMongo();
    const savedCompanies = await Company.find();
    res.json(savedCompanies);
  } catch (err) {
    res.json({ err });
  }
}
