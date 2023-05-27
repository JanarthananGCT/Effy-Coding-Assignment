import connectMongo from "../../../utils/connectMongo";
import Users from "@/models/Users";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function CreateUsers(req, res) {
  const {
    First_Name,
    Last_Name,
    Email,
    Id,
    Company_Id,
    Designation,
    DOB,
    Active,
  } = req.body;

  try {
    const newUser = new Users({
      First_Name,
      Last_Name,
      Email,
      Id,
      Company_Id,
      Designation,
      DOB,
      Active,
    });
    await connectMongo();
    const savedUsers = await newUser.save();
    res.json(savedUsers);
  } catch (err) {
    res.json({ err });
  }
}
