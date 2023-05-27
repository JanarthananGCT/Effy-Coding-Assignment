import connectMongo from "../../../utils/connectMongo";
import Company from "@/models/Company";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateCompany(req, res) {
  const { Name, Id, Coordinates } = req.body;
  try {
    await connectMongo();
    const updatedCompanies = await Company.updateOne(
      { Id: Id },
      {
        $set: {
          Id: Id,
          Name: Name,
          Coordinates: Coordinates,
        },
      }
    );
    res.json(updatedCompanies);
  } catch (err) {
    res.json({ err });
  }
}
