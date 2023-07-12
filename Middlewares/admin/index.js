const roles = ["admin", "operator"];


function authMiddleware(req,res,next){
    if (!req.session.user){
        return res.redirect('/login')
    }
    if (!roles.includes(req.session.user.role)){
        return res.redirect('/login')
    }
    
    next()
}

function authMiddlewareAdmin(req,res,next){
    if (!req.session.user){
        return res.redirect('/login')
    }
    if ("admin" != req.session.user.role){
        return res.redirect('/login')
    }
    
    next()
}

module.exports = { authMiddleware, authMiddlewareAdmin };