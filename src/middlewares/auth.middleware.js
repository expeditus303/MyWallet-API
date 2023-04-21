import { validate as uuidValidate } from 'uuid';
import errors from "../errors/errors.js"
import userRepositories from "../repositories/user.repositories.js"

async function authMiddleware(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    const validateToken = uuidValidate(token)

    if (!validateToken) throw errors.unauthorized("Invalid or missing authentication token")

    try {
        const user = await userRepositories.findByToken({session: token})
    
        if (!user) throw errors.notFound("User not found for the given authentication token")
        
        res.locals.user = user;
    
        next()
        
    } catch (err) {
        next(err)
    }

}

export default authMiddleware