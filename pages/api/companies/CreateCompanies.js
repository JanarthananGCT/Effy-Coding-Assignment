import connectMongo from "../../../utils/connectMongo";
import Company from "@/models/Company";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function CreateCompanies(req, res) {
  const {
    Name,
    Id,

    Coordinates,
  } = req.body;

  try {
    const newCompany = new Company({
      Name,
      Id,

      Coordinates,
    });
    await connectMongo();
    const savedCompanies = await newCompany.save();
    res.json(savedCompanies);
  } catch (err) {
    res.json({ err });
  }
}
