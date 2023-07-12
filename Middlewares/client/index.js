
function AuthMiddleware(req, res, next){
    if (!req.session.user){
        return res.status(401).json({code:'NL', message: 'No session active'})
    }

    next()
}

module.exports= {AuthMiddleware}