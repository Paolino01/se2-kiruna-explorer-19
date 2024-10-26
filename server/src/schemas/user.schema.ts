import mongoose, { Document, Schema } from 'mongoose';
import { hashSync, genSaltSync } from 'bcrypt';
import { IUser } from '@interfaces/user.interface';
import { UserRoleEnum } from '@utils/enums/user-role.enum';

export type UserDocument = IUser & Document;

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      set: (password: string) => {
        const salt = genSaltSync(10);
        return hashSync(password, salt);
      },
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: UserRoleEnum,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.index({ email: 1 });

export default mongoose.model<UserDocument>('User', userSchema);
