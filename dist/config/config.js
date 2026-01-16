import dotenv from 'dotenv';
dotenv.config();
export const config = {
    port: process.env.PORT || 3001,
    uri: process.env.MONGO_URI
};
//# sourceMappingURL=config.js.map