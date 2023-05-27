import connectMongo from "../../../utils/connectMongo";
import Users from "@/models/Users";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function UpdateUser(req, res) {
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
    await connectMongo();
    const updatedUsers = await Users.updateOne(
      { Id: Id },
      {
        $set: {
          First_Name,
          Last_Name,
          Email,
          Id,
          Company_Id,
          Designation,
          DOB,
          Active,
        },
      }
    );
    res.json(updatedUsers);
  } catch (err) {
    res.json({ err });
  }
}
