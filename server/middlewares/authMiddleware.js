const authMiddleware = (req, res, next) => {
    req.user = { _id: '6696a8fb15a9558bf0e2fcf6' };
    next();
}
module.exports = authMiddleware;