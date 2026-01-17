import mongoose, { Schema } from "mongoose";
import type { regSchemaType } from "./auth.schema.js";
import { hashPassword } from "../../shared/utils/bcryptPassword.js";
import { number } from "zod";


const userSchema = new Schema<regSchemaType>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    phone: { type: number },
    name: { type: String,required: true },
})


userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return
    }
    this.password = await hashPassword(this.password)
})

export const UserModel = mongoose.model('User', userSchema)