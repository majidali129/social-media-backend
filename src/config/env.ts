import dotenv from 'dotenv'


dotenv.config()



export const config = {
    PORT: process.env.PORT!,
    NODE_ENV: process.env.NODE_ENV!,
    DATABASE_URI: process.env.DATABASE_URI!,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET!,
}