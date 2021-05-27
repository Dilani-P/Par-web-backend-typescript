import { IOrgUser } from '../interfaces/orgUser.interface'
import mongoose from "mongoose";

export interface IOrgUserModel extends IOrgUser, mongoose.Document {}
//mongo db schema define
export const OrgUserSchema = new mongoose.Schema(
// Workaround to make sure Mongoose knows `Organization UserSchema` is an object
  {
    // userId: { type : String } ,
    orgId: { type : String },
    role: { type : String }
  },
  {
    timestamps: true,
  }
);

const OrgUser = mongoose.model<IOrgUserModel>("OrgUser", OrgUserSchema);

export default OrgUser;