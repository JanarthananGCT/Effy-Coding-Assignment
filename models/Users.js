// import { Schema, model, models } from "mongoose";

// var userSchema = new Schema({
//   First_Name: { type: String },
//   Last_Name: { type: String },
//   Id: { type: Number },
//   Company_Id: { type: Number },
//   Email: { type: String },
//   Designation: { type: String },
//   DOB: { type: Date },
//   Active: { type: Boolean },
// });

// var Users = models.Users || model("Users", userSchema);

// export default Users;

import { Schema, model, models } from "mongoose";

var userSchema = new Schema({
  First_Name: { type: String },
  Last_Name: { type: String },
  Id: { type: Number },
  Company_Id: { type: Number },
  Email: { type: String },
  Designation: { type: String },
  DOB: { type: Date },
  Active: { type: Boolean },
});

var Users;

if (models.Users) {
  Users = models.Users;
} else {
  Users = model("Users", userSchema);
}

export default Users;
