import { IUser } from '../interfaces/user.interface'
import mongoose from "mongoose";

export interface IUserModel extends IUser, mongoose.Document {}
//mongo db schemma define
export const UserSchema = new mongoose.Schema(
  {
    firstname: { type : String } ,
    lastname: { type : String },
    role: { type : String },
    password : { type : String },
    invitedAt : { type : String },
    invitedBy : { type : String },
    acceptedAt : { type : String }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUserModel>("user", UserSchema);

export default User;
