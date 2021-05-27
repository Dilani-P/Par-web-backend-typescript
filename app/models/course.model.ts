import { Icourse } from "../interfaces/course.interface";
import mongoose from "mongoose";

export interface ICourseModel extends Icourse, mongoose.Document {}

export const CourseSchema = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String },
    participantRoles: [
      {
        name: { type: String },
        steps: [
          {
            slug: { type: String },
            prerequisites: [
              {
                dataType: { type: String },
              },
            ],
            components: [
              {
                type: { type: String },
                dataType: { type: String },
                slug: { type: String },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model<ICourseModel>("course", CourseSchema);
export default Course;
