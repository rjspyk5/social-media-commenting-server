import dotenv from 'dotenv';
dotenv.config();

interface Config {
    port: number | string
    uri: string
    jwtSecret: string
}

export const config: Config = {
    port: process.env.PORT || 3001,
    uri: process.env.MONGO_URI as string,
    jwtSecret: process.env.JWT_SECRET as string
}