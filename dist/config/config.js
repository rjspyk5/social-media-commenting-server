import dotenv from 'dotenv';
dotenv.config();
export const config = {
    port: process.env.PORT || 3001,
    uri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET
};
//# sourceMappingURL=config.js.map