const { JwtMethods } = require('../../app/utils/JwtMethods');

module.exports = {
    async validateUserToken(req, res, next) {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: "Token not found" })
        }
        try {
            const decoded = JwtMethods.verifyToken(token)            
            if(decoded.role !== 'customer') throw new Error()
            next();
        } catch (error) {
            return res.status(401).json({ error: "Token invalid or expired"})
        }
    }
}