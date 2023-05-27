// import { Schema, model, models } from "mongoose";

// var companySchema = new Schema({
//   Name: { type: String },
//   Id: { type: Number },
//   Users_Ids: [{ type: Number }],
//   Coordinates: {
//     latitude: { type: Number },
//     longitude: { type: Number },
//     Address: { type: String },
//   },
// });

// var Company = models.Users || model("Company", companySchema);

// export default Company;
import { Schema, model, models } from "mongoose";

var companySchema = new Schema({
  Name: { type: String },
  Id: { type: Number },
  Users_Ids: [{ type: Number }],
  Coordinates: {
    latitude: { type: Number },
    longitude: { type: Number },
    Address: { type: String },
  },
});

var Company;

if (models.Company) {
  Company = models.Company;
} else {
  Company = model("Company", companySchema);
}

export default Company;
