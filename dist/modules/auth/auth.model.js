import mongoose, { Schema } from "mongoose";
import { hashPassword } from "../../shared/utils/bcryptPassword.js";
import { number } from "zod";
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["admin", "user", "deliveryHero"], required: true },
    phone: { type: number },
});
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    this.password = await hashPassword(this.password);
});
export const UserModel = mongoose.model('User', userSchema);
//# sourceMappingURL=auth.model.js.map