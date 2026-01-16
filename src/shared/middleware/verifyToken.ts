import { verifyJwt } from "../utils/generateToken.js"

export const verifyToken=(token:string)=>{
    const result=verifyJwt(token)
    return result
}